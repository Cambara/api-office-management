import { validatorService } from '../../../shared/services'
import { CourseRepository } from '../course.repository'
import { AddCourseController } from './add-course.controller'
import { AddCourseService } from './add-course.service'

const courseRepository = CourseRepository.getInstance()

const addCourseService = new AddCourseService(courseRepository)

const addCourseController = new AddCourseController(addCourseService, validatorService)

export { addCourseController }
