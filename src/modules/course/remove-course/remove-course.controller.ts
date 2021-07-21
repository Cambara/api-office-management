import { Request, Response } from 'express'
import { IController } from '../../../shared/controllers/controller.protocol'
import { ErrorNamesEnum } from '../../../shared/helpers/errors.helper'

import { internalErrorRequest, successRequest, notFoundRequest, NotFoundMessageEnum } from '../../../shared/helpers/http-response.helper'
import { RemoveCourseService } from './remove-course.service'

export class RemoveCourseController implements IController {
    private readonly removeCourseService:RemoveCourseService

    constructor (removeCourseService:RemoveCourseService) {
      this.removeCourseService = removeCourseService
    }

    handle = async (request: Request, response: Response):Promise<Response> => {
      try {
        const { id } = request.params

        const course = await this.removeCourseService.execute({ id, userId: request.user._id })

        return successRequest(course, response)
      } catch (error) {
        const name = error.name

        if (name === ErrorNamesEnum.NOT_FOUND_OBJECT) {
          notFoundRequest(NotFoundMessageEnum.OBJECT_NOT_FOUND, response)
        }

        return internalErrorRequest(error, response)
      }
    }
}
