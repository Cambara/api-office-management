import { CourseRepository } from '../course.repository'
import { GetCourseController } from './get-course.controller'
import { GetCourseService } from './get-course.service'

const courseRepository = CourseRepository.getInstance()

const getCourseService = new GetCourseService(courseRepository)

const getCourseController = new GetCourseController(getCourseService)

export { getCourseController }
