import { Request, Response } from 'express'
import { IController } from '../../../shared/controllers/controller.protocol'
import { ErrorNamesEnum } from '../../../shared/helpers/errors.helper'

import { internalErrorRequest, successRequest, notFoundRequest, NotFoundMessageEnum } from '../../../shared/helpers/http-response.helper'
import { GetCourseService } from './get-course.service'

export class GetCourseController implements IController {
    private readonly getCourseService:GetCourseService

    constructor (getCourseService:GetCourseService) {
      this.getCourseService = getCourseService
    }

    handle = async (request: Request, response: Response):Promise<Response> => {
      try {
        const { id } = request.params

        const course = await this.getCourseService.execute({ id, userId: request.user._id })

        return successRequest(course, response)
      } catch (error) {
        const name = error.name

        if (name === ErrorNamesEnum.NOT_FOUND_OBJECT) {
          return notFoundRequest(NotFoundMessageEnum.OBJECT_NOT_FOUND, response)
        }

        return internalErrorRequest(error, response)
      }
    }
}
