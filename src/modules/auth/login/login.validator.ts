import { object, ObjectSchema, string } from 'yup'

export const loginValidator = ():ObjectSchema => {
  return object({
    email: string().email().required(),
    password: string().required()
  }).required()
}
