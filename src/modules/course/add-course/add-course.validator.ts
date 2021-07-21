import { date, number, object, ObjectSchema, string } from 'yup'

export const addCourseValidator = ():ObjectSchema => {
  return object({
    name: string().min(3).required(),
    link: string().min(8).required(),
    startedDate: date().required(),
    totalDuration: number().required()
  }).required()
}
