import { ObjectSchema } from 'yup'
import { IValidatorProvider } from '../../../providers/validator/validator.protocol'
import { IService } from '../service.protocol'
import { IValidatorDTO } from './validator.dto'

export class ValidatorService implements IService<IValidatorDTO, unknown> {
  private readonly validatorProvider:IValidatorProvider<ObjectSchema>

  constructor (validatorProvider:IValidatorProvider<ObjectSchema>) {
    this.validatorProvider = validatorProvider
  }

  execute = async <J>({ schema, params }: IValidatorDTO): Promise<J | string[]> => {
    return this.validatorProvider.validate<J>(schema, params)
  }
}
