
export enum ErrorMessagesEnum {
  INVALID_USER_MSG = 'The user isn\'t valid'
}

export enum ErrorNamesEnum {
  INVALID_USER = 'InvalidUser',
  NOT_FOUND_OBJECT = 'NotFoundObject',
  INVALID_REQUEST = 'InvalidRequest'
}

export class InvalidUserError extends Error {
  constructor () {
    super(ErrorMessagesEnum.INVALID_USER_MSG)
    this.name = ErrorNamesEnum.INVALID_USER
  }
}

export class NotFoundObjectError extends Error {
  constructor (value:string) {
    super(`Not found the ${value} value`)
    this.name = ErrorNamesEnum.NOT_FOUND_OBJECT
  }
}

export class InvalidRequestError extends Error {
  constructor (value:string) {
    super(value)
    this.name = ErrorNamesEnum.INVALID_REQUEST
  }
}
