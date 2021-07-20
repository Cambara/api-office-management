
export default {
  port: process.env.PORT || 3000,
  mongoDBHost: process.env.MONGODB_HOST || 'mongodb://localhost:27017/office_management_db?maxIdleTimeMS=0',
  isVerboseLog: (process.env.VERBOSE_LOG && process.env.VERBOSE_LOG === '1'),
  isProduction: (process.env.NODE_ENV && process.env.NODE_ENV === 'production'),
  AuthSecret: process.env.AUTH_SECRET || 'abacate',
  AuthExpiredIn: process.env.AUTH_EXPIRED_IN || '24h',
  CriptographySalt: parseInt(process.env.CRIPTOGRAPHY_SALT || '10')
}
