import { YupProvider } from '../../../providers/validator/yup.provider'
import { ValidatorService } from './validator.service'

const validateProvider = YupProvider.getInstance()
const validatorService = new ValidatorService(validateProvider)

export { validatorService }
