import { IService } from '../../../shared/services/service.protocol'
import { CourseRepository } from '../course.repository'
import { ICourseModel } from '../models/course.model'
import { ICourseDocument } from '../schemas/course.schema'
import { IAddCourseServiceDto } from './add-course.dto'

export class AddCourseService implements IService<IAddCourseServiceDto, ICourseDocument> {
    private readonly courseRepository:CourseRepository

    constructor (courseRepository:CourseRepository) {
      this.courseRepository = courseRepository
    }

    execute = async (dto: IAddCourseServiceDto): Promise<ICourseDocument> => {
      const newCourse:ICourseModel = {
        ...dto,
        duration: 0,
        exercisesDuration: 0,
        isFinished: false,
        logs: []
      }

      return this.courseRepository.create(newCourse)
    }
}
