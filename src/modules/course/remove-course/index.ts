import { CourseRepository } from '../course.repository'
import { RemoveCourseController } from './remove-course.controller'
import { RemoveCourseService } from './remove-course.service'

const courseRepository = CourseRepository.getInstance()

const removeCourseService = new RemoveCourseService(courseRepository)

const removeCourseController = new RemoveCourseController(removeCourseService)

export { removeCourseController }
