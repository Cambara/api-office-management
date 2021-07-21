import { Request, Response } from 'express'
import { IController } from '../../../shared/controllers/controller.protocol'
import { badRequest, internalErrorRequest, successRequest } from '../../../shared/helpers/http-response.helper'
import { ValidatorService } from '../../../shared/services/validator/validator.service'
import { IAddCourseDto } from './add-course.dto'
import { AddCourseService } from './add-course.service'
import { addCourseValidator } from './add-course.validator'

export class AddCourseController implements IController {
    private readonly addCourseService:AddCourseService
    private readonly validatorService:ValidatorService

    constructor (addCourseService:AddCourseService, validatorService:ValidatorService) {
      this.addCourseService = addCourseService
      this.validatorService = validatorService
    }

    handle = async (request: Request, response: Response):Promise<Response> => {
      try {
        const { body } = request

        const params = await this.validatorService.execute<IAddCourseDto>({ schema: addCourseValidator(), params: body })

        if (typeof params !== 'object' || Array.isArray(params)) return badRequest(params, response)

        const course = await this.addCourseService.execute(params)
        return successRequest(course, response)
      } catch (error) {
        return internalErrorRequest(error, response)
      }
    }
}
