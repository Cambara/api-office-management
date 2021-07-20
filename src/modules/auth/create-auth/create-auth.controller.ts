import { Request, Response } from 'express'
import { IController } from '../../../shared/controllers/controller.protocol'
import { ErrorNamesEnum } from '../../../shared/helpers/errors.helper'
import { badRequest, internalErrorRequest, successRequest } from '../../../shared/helpers/http-response.helper'
import { ValidatorService } from '../../../shared/services/validator/validator.service'
import { IAuthModel } from '../models/auth.model'
import { CreateAuthService } from './create-auth.service'
import { createAuthValidator } from './create-auth.validator'

export class CreateAuthController implements IController {
    private readonly createAuthService:CreateAuthService
    private readonly validatorService:ValidatorService

    constructor (createAuthService:CreateAuthService, validatorService:ValidatorService) {
      this.createAuthService = createAuthService
      this.validatorService = validatorService
    }

    handle = async (request: Request, response: Response):Promise<Response> => {
      try {
        const { body } = request

        const params = await this.validatorService.execute<IAuthModel>({ schema: createAuthValidator(), params: body })

        if (typeof params !== 'object' || Array.isArray(params)) return badRequest(params, response)

        const auth = await this.createAuthService.execute(params)
        return successRequest(auth, response)
      } catch (error) {
        const errorName = error.name

        if (ErrorNamesEnum.INVALID_USER === errorName) return badRequest(['email must be unique'], response)

        return internalErrorRequest(error, response)
      }
    }
}
