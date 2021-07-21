import { date, number, object, ObjectSchema } from 'yup'

export const addCourseLogValidator = ():ObjectSchema => {
  return object({
    day: date().required(),
    duration: number().required(),
    exercisesDuration: number().required(),
    finishedDate: date()
  }).required()
}
