import { Request, Response, NextFunction } from 'express'
import { authProvider } from '../../providers/auth'
import { UnauthorizedMessageEnum, unauthorizedRequest } from '../helpers/http-response.helper'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const authMiddleware = (request:Request, response:Response, next:NextFunction) => {
  if (!request.headers.authorization) {
    return unauthorizedRequest(UnauthorizedMessageEnum.NOT_FOUND_TOKEN, response)
  }

  const [, token] = request.headers.authorization.split(' ')

  try {
    request.user = authProvider.verify(token)
    next()
  } catch (error) {
    return unauthorizedRequest(UnauthorizedMessageEnum.INVALID_TOKEN, response)
  }
}
