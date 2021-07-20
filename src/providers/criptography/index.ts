import { BcripterProvider } from './bcrypter/bcrypter.provider'
import env from '../../shared/helpers/env.helper'

const criptographyProvider = new BcripterProvider(env.CriptographySalt)

export { criptographyProvider }
