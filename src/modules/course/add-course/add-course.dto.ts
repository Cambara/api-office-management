
export interface IAddCourseDto {
    name: string
    link: string
    startedDate: Date
    totalDuration: number
}

export interface IAddCourseServiceDto extends IAddCourseDto {
    userId: string
}
