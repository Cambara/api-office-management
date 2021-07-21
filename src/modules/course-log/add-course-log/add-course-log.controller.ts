import { Request, Response } from 'express'
import { IController } from '../../../shared/controllers/controller.protocol'
import { ErrorNamesEnum } from '../../../shared/helpers/errors.helper'
import { badRequest, internalErrorRequest, NotFoundMessageEnum, notFoundRequest, successRequest } from '../../../shared/helpers/http-response.helper'
import { ValidatorService } from '../../../shared/services/validator/validator.service'
import { IAddCourseLogDto } from './add-course-log.dto'
import { AddCourseLogService } from './add-course-log.service'
import { addCourseLogValidator } from './add-course-log.validator'

export class AddCourseLogController implements IController {
    private readonly addCourseLogService:AddCourseLogService
    private readonly validatorService:ValidatorService

    constructor (addCourseLogService:AddCourseLogService, validatorService:ValidatorService) {
      this.addCourseLogService = addCourseLogService
      this.validatorService = validatorService
    }

    handle = async (request: Request, response: Response):Promise<Response> => {
      try {
        const { id } = request.params
        const { body } = request

        const params = await this.validatorService.execute<IAddCourseLogDto>({ schema: addCourseLogValidator(), params: body })

        if (typeof params !== 'object' || Array.isArray(params)) return badRequest(params, response)

        const log = await this.addCourseLogService.execute({
          ...params,
          userId: request.user._id,
          logId: id
        })

        return successRequest(log, response)
      } catch (error) {
        const name = error.name

        if (name === ErrorNamesEnum.NOT_FOUND_OBJECT) {
          return notFoundRequest(NotFoundMessageEnum.OBJECT_NOT_FOUND, response)
        } else if (name === ErrorNamesEnum.INVALID_REQUEST) {
          return badRequest([error.message], response)
        }

        return internalErrorRequest(error, response)
      }
    }
}
