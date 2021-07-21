
export interface IAddCourseLogDto {
    day: Date
    duration: number
    exercisesDuration: number
    finishedDate?: Date
}

export interface IAddCourseLogServiceDto extends IAddCourseLogDto {
    userId: string
    logId: string
}
