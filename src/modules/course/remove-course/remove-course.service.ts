import { IRemoveDto } from '../../../shared/dtos/remove.dto'
import { NotFoundObjectError } from '../../../shared/helpers/errors.helper'
import { IService } from '../../../shared/services/service.protocol'
import { CourseRepository } from '../course.repository'
import { ICourseDocument } from '../schemas/course.schema'

export class RemoveCourseService implements IService<IRemoveDto, ICourseDocument> {
    private courseRepository:CourseRepository

    constructor (courseRepository:CourseRepository) {
      this.courseRepository = courseRepository
    }

    execute = async ({ id, userId }: IRemoveDto): Promise<ICourseDocument> => {
      const course = await this.courseRepository.findOne({ _id: id, userId })

      if (!course) {
        throw new NotFoundObjectError(id)
      }

      await this.courseRepository.deleteById(id)
      return course
    }
}
