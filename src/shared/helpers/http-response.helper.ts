import { Response } from 'express'
import { showVerboseLog } from './log.helper'

export enum NotFoundMessageEnum {
  OBJECT_NOT_FOUND = 'Objeto não encontrado'
}

export enum UnauthorizedMessageEnum {
  USER_UNAUTHORIZED = 'Usuário não autorizado',
  INVALID_TOKEN = 'Token inválido',
  NOT_FOUND_TOKEN = 'Não encontrado um token válido'
}

export const successRequest = (data: unknown, response:Response): Response => {
  return response.json({
    data,
    status: true,
    message: 'Sucesso!'
  })
}

export const badRequest = (errors: unknown, response:Response): Response => {
  return response.status(400).json({
    status: false,
    message: 'Erro ao enviar requisição',
    errors
  })
}

export const unauthorizedRequest = (message:UnauthorizedMessageEnum, response:Response): Response => {
  return response.status(401).json({
    status: false,
    message
  })
}

export const notFoundRequest = (message: NotFoundMessageEnum, response:Response): Response => {
  return response.status(404).json({
    status: false,
    message
  })
}

export const internalErrorRequest = (error:Error, response:Response): Response => {
  let errorMessage

  console.log(error)

  if (showVerboseLog()) {
    errorMessage = error.message
  }

  return response.status(500).json({
    status: false,
    message: 'Erro no sistema. Por favor tente novamente ou entre em contato com o nosso suporte',
    errorMessage
  })
}
