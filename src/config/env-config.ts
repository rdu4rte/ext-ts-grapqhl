import dotenv from 'dotenv'
dotenv.config()

const env = (name: string): string => {
  const value = process.env[name]!
  return value
}

export interface Config {
  port: number
  gqlPath: string
  isDev: boolean
  mongoDb: {
    uri: string
    host: string
    port: number
    db: string
  }
  jwt: {
    secret: string
    expiresIn: number
  }
  salt: number
}

export const config: Config = {
  port: +env('CUSTOM_PORT') || 3003,
  gqlPath: env('GRAPHQL_PATH') || '/graphql',
  isDev: env('NODE_ENV') === 'development',
  mongoDb: {
    uri: env('MONGODB_URI') || 'mongodb://localhost:27017/ezt-test',
    host: env('MONGODB_HOST') || 'localhost',
    port: +env('MONGODB_PORT') || 27017,
    db: env('MONGODB_DB') || 'ezt-test'
  },
  jwt: {
    secret: env('JWT_SECRET') || 'shh_th1s_1s_4_s3cr3t',
    expiresIn: +env('JWT_EXPIRESIN') || 3600
  },
  salt: +env('SALT') || 32
}