import { Request, Response } from 'express'
import { IController } from '../../../shared/controllers/controller.protocol'
import { ErrorNamesEnum } from '../../../shared/helpers/errors.helper'
import { badRequest, internalErrorRequest, successRequest, unauthorizedRequest } from '../../../shared/helpers/http-response.helper'
import { ValidatorService } from '../../../shared/services/validator/validator.service'
import { ILoginDto } from './login.dto'
import { LoginService } from './login.service'
import { loginValidator } from './login.validator'

export class LoginController implements IController {
    private readonly loginService:LoginService
    private readonly validatorService:ValidatorService

    constructor (loginService:LoginService, validatorService:ValidatorService) {
      this.loginService = loginService
      this.validatorService = validatorService
    }

    handle = async (request: Request, response: Response):Promise<Response> => {
      try {
        const { body } = request

        const params = await this.validatorService.execute<ILoginDto>({ schema: loginValidator(), params: body })

        if (typeof params !== 'object' || Array.isArray(params)) return badRequest(params, response)

        const auth = await this.loginService.execute(params)
        return successRequest(auth, response)
      } catch (error) {
        const errorName = error.name

        if (ErrorNamesEnum.INVALID_USER === errorName) return unauthorizedRequest(response)

        return internalErrorRequest(error, response)
      }
    }
}
