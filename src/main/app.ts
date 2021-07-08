
import { expressApp } from './express'
import { Server } from 'http'

const http = new Server(expressApp)

export { http }
