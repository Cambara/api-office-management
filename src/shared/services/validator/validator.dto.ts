import { ObjectSchema } from 'yup'

export interface IValidatorDTO {
  schema: ObjectSchema
  params: unknown
}
