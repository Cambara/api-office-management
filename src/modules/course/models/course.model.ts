import { ICourseLogModel } from '../../course-log/models/course-log.model'

export interface ICourseModel {
    userId: string
    name: string
    link: string
    startedDate: Date
    finishedDate?: Date
    totalDuration: number
    duration: number
    exercisesDuration: number
    isFinished: boolean
    logs: ICourseLogModel[]
}
