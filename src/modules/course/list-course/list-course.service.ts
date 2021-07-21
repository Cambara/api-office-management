import { IListDto } from '../../../shared/dtos/list.dto'
import { getPaginatorData } from '../../../shared/helpers/pagination.helper'
import { IService } from '../../../shared/services/service.protocol'
import { CourseRepository } from '../course.repository'
import { ICourseDocument } from '../schemas/course.schema'

export class ListCourseService implements IService<IListDto, ICourseDocument[]> {
    private courseRepository:CourseRepository

    constructor (courseRepository:CourseRepository) {
      this.courseRepository = courseRepository
    }

    execute = async (dto: IListDto): Promise<ICourseDocument[]> => {
      const { userId } = dto
      const { skip, limit } = getPaginatorData(dto.page, dto.limit)
      return this.courseRepository.find({
        userId
      },
      {
      },
      {
        skip,
        limit
      })
    }
}
