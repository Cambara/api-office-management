import { Request, Response } from 'express'
import { IController } from '../../../shared/controllers/controller.protocol'
import { IListRequestDto } from '../../../shared/dtos/list.dto'
import { badRequest, internalErrorRequest, successRequest } from '../../../shared/helpers/http-response.helper'
import { ValidatorService } from '../../../shared/services/validator/validator.service'
import { listValidator } from '../../../shared/validators/list.validator'
import { ListCourseService } from './list-course.service'

export class ListCourseController implements IController {
    private readonly listCourseService:ListCourseService
    private readonly validatorService:ValidatorService

    constructor (listCourseService:ListCourseService, validatorService:ValidatorService) {
      this.listCourseService = listCourseService
      this.validatorService = validatorService
    }

    handle = async (request: Request, response: Response):Promise<Response> => {
      try {
        const { query } = request

        const params = await this.validatorService.execute<IListRequestDto>({ schema: listValidator(), params: query })

        if (typeof params !== 'object' || Array.isArray(params)) return badRequest(params, response)

        const course = await this.listCourseService.execute({
          ...params,
          userId: request.user._id
        })

        return successRequest(course, response)
      } catch (error) {
        return internalErrorRequest(error, response)
      }
    }
}
