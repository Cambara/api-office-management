import { object, ObjectSchema, string } from 'yup'

export const createAuthValidator = ():ObjectSchema => {
  return object({
    email: string().email().required(),
    password: string().min(6).max(20).required(),
    name: string().required()
  }).required()
}
