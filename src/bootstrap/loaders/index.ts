import { Application } from 'express'
import { ApolloServer } from 'apollo-server-express'
import { Logger } from '../../config'

// loaders
import apolloLoader from './apollo'
import expressLoader from './express'
import mongooseLoader from './mongoose'

export default async (app: Application): Promise<ApolloServer> => {
  await expressLoader(app).then(() => Logger.info('[Loader] Express Loaded')).catch(err => Logger.error(`Express error: ${err}`))
  await mongooseLoader().then(() => Logger.info('[Loader] MongoDB Loaded')).catch(err => Logger.error(`MongoDB error: ${err}`))
  await apolloLoader().then(() => Logger.info('[Loader] Apollo Loaded')).catch(err => Logger.error(`Apollo error: ${err}, ${err.details}`))
  return apolloLoader()
}