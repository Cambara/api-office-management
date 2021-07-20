import { IAuthProvider } from '../auth.provider'
import { sign, verify } from 'jsonwebtoken'

export class JwtAuthProvider<T> implements IAuthProvider<T> {
    private secret:string
    private expiresIn:string

    constructor (secret:string, expiresIn:string) {
      this.secret = secret
      this.expiresIn = expiresIn
    }

    sign = (data: T): string => {
      return sign(
        data as any,
        this.secret,
        {
          expiresIn: this.expiresIn
        }
      )
    }

    verify = (token: string): T => {
      const result = verify(token, this.secret)
      return result as T
    }
}
