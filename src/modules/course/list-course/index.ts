import { validatorService } from '../../../shared/services'
import { CourseRepository } from '../course.repository'
import { ListCourseController } from './list-course.controller'
import { ListCourseService } from './list-course.service'

const courseRepository = CourseRepository.getInstance()
const listCourseService = new ListCourseService(courseRepository)

const listCourseController = new ListCourseController(listCourseService, validatorService)

export { listCourseController }
