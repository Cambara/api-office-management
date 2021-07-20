import { ICriptographyProvider } from '../criptography.provider'
import bcrypt from 'bcrypt'

export class BcripterProvider implements ICriptographyProvider {
    private salt:number

    constructor (salt:number) {
      this.salt = salt
    }

    encrypt = async (value: string): Promise<string> => {
      const hash = await bcrypt.hash(value, this.salt)
      return hash
    }
}
