import { ObjectSchema } from 'yup'
import { IValidatorProvider } from './validator.protocol'

export class YupProvider implements IValidatorProvider<ObjectSchema> {
  private static instance: YupProvider
  // eslint-disable-next-line no-useless-constructor
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor () {}

  static getInstance = ():YupProvider => {
    if (!YupProvider.instance) YupProvider.instance = new YupProvider()
    return YupProvider.instance
  }

  validate = async <J> (schema: ObjectSchema, params: unknown): Promise<J | string[]> => {
    try {
      const validatedParams = await schema.validate(params, {
        abortEarly: false,
        stripUnknown: true
      })
      if (!validatedParams) throw new Error('Invalid object')
      const obj = validatedParams as unknown as J
      return obj
    } catch ({ errors: errorsSchema }) {
      return errorsSchema as string[]
    }
  }
}
