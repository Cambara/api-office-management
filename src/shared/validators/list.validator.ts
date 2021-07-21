import { number, object, ObjectSchema } from 'yup'

export const listValidator = ():ObjectSchema => {
  return object({
    page: number(),
    limit: number()
  }).required()
}
