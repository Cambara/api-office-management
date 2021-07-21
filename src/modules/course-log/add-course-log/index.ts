import { validatorService } from '../../../shared/services'
import { CourseRepository } from '../../course/course.repository'
import { AddCourseLogController } from './add-course-log.controller'
import { AddCourseLogService } from './add-course-log.service'

const courseRepository = CourseRepository.getInstance()

const addCourseLogService = new AddCourseLogService(courseRepository)

const addCourseLogController = new AddCourseLogController(addCourseLogService, validatorService)

export { addCourseLogController }
