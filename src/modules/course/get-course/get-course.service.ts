import { IGetByIdDto } from '../../../shared/dtos/getById.dto'
import { NotFoundObjectError } from '../../../shared/helpers/errors.helper'
import { IService } from '../../../shared/services/service.protocol'
import { CourseRepository } from '../course.repository'
import { ICourseDocument } from '../schemas/course.schema'

export class GetCourseService implements IService<IGetByIdDto, ICourseDocument> {
    private courseRepository:CourseRepository

    constructor (courseRepository:CourseRepository) {
      this.courseRepository = courseRepository
    }

    execute = async ({ id, userId }: IGetByIdDto): Promise<ICourseDocument> => {
      const course = await this.courseRepository.findOne({ _id: id, userId })

      if (!course) {
        throw new NotFoundObjectError(id)
      }

      return course
    }
}
