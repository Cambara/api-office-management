import { FilterQuery, Types } from 'mongoose'
import { AbstractRepository } from '../../shared/repositories/abstract.reposity'
import { ICourseLogModel } from '../course-log/models/course-log.model'
import { ICourseLogDocument } from '../course-log/schemas/course-log.schema'
import { ICourseModel } from './models/course.model'
import { ICourseDocument, Course } from './schemas/course.schema'

const ObjectId = Types.ObjectId

export class CourseRepository extends AbstractRepository<ICourseDocument, ICourseModel> {
  private static instance: CourseRepository
  private constructor () {
    super(Course)
  }

  static getInstance = ():CourseRepository => {
    if (!CourseRepository.instance) CourseRepository.instance = new CourseRepository()
    return CourseRepository.instance
  }

  findOneLog = async (
    cond: FilterQuery<ICourseDocument>,
    logCond: FilterQuery<ICourseDocument>
  ):Promise<ICourseLogDocument |null> => {
    const mainMatch = cond._id ? Object.assign({}, cond, { _id: ObjectId(cond._id) }) : cond

    const log = await this.model.aggregate<ICourseLogDocument>([
      { $match: mainMatch },
      { $unwind: '$logs' },
      { $replaceRoot: { newRoot: '$logs' } },
      { $match: logCond }
    ])
    return log[0]
  }

  updateAndAddLog = async (cond: FilterQuery<ICourseModel>, course:FilterQuery<ICourseModel>, log:ICourseLogModel):Promise<boolean> => {
    const result = await this.model.updateOne(cond, {
      $push: { logs: log },
      ...course
    })
    return result.nModified > 0
  }
}
