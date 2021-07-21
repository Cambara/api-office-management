import { AbstractRepository } from '../../shared/repositories/abstract.reposity'
import { ICourseModel } from './models/course.model'
import { ICourseDocument, Course } from './schemas/course.schema'

export class CourseRepository extends AbstractRepository<ICourseDocument, ICourseModel> {
  private static instance: CourseRepository
  private constructor () {
    super(Course)
  }

  static getInstance = ():CourseRepository => {
    if (!CourseRepository.instance) CourseRepository.instance = new CourseRepository()
    return CourseRepository.instance
  }
}
