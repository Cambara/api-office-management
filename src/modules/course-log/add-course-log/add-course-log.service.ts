import { InvalidRequestError, NotFoundObjectError } from '../../../shared/helpers/errors.helper'
import { IService } from '../../../shared/services/service.protocol'
import { CourseRepository } from '../../course'
import { ICourseLogDocument } from '../schemas/course-log.schema'
import { IAddCourseLogServiceDto } from './add-course-log.dto'

export class AddCourseLogService implements IService<IAddCourseLogServiceDto, ICourseLogDocument> {
    private readonly courseRepository: CourseRepository

    constructor (courseRepository: CourseRepository) {
      this.courseRepository = courseRepository
    }

    execute = async ({
      day,
      logId,
      userId,
      duration,
      exercisesDuration,
      finishedDate
    }: IAddCourseLogServiceDto): Promise<ICourseLogDocument> => {
      const course = await this.courseRepository.findOne({ _id: logId, userId, isFinished: false })

      if (!course) {
        throw new NotFoundObjectError(logId)
      }

      const log = await this.courseRepository.findOneLog({ _id: logId, userId, isFinished: false }, { day })

      if (log) {
        throw new InvalidRequestError('Não pode adicionar mais de um log no mesmo dia!')
      }

      await this.courseRepository.updateAndAddLog({
        _id: logId,
        userId,
        isFinished: false
      }, {
        duration: course.duration + duration,
        exercisesDuration: course.exercisesDuration + exercisesDuration,
        finishedDate,
        isFinished: !!finishedDate
      }, {
        day,
        name: course.name,
        link: course.link,
        startedDate: course.startedDate,
        totalDuration: course.totalDuration,
        userId: course.userId,
        duration,
        exercisesDuration,
        finishedDate,
        isFinished: !!finishedDate
      })

      const newLog = await this.courseRepository.findOneLog({ _id: logId, userId }, { day })

      if (!newLog) {
        throw new NotFoundObjectError(`course day ${day}`)
      }

      return newLog
    }
}
