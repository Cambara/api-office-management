import { ICourseModel } from '../../course/models/course.model'

export interface ICourseLogModel extends Omit<ICourseModel, 'logs'>{
    day: Date
}
