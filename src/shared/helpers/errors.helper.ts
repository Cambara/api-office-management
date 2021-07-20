
export enum ErrorMessagesEnum {
    INVALID_USER_MSG = 'The user isn\'t valid'
}

export enum ErrorNamesEnum {
    INVALID_USER = 'InvalidUser'
}

export class InvalidUserError extends Error {
  constructor () {
    super(ErrorMessagesEnum.INVALID_USER_MSG)
    this.name = ErrorNamesEnum.INVALID_USER
  }
}
