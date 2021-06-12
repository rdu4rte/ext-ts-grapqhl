import { ApolloServer } from 'apollo-server-express'
import { config } from '../../config'
import { gqlbuildSchema } from '../../graphql/buildSchema'

export default async (): Promise<ApolloServer> => {
  const schema = await gqlbuildSchema()

  return new ApolloServer({
    schema,
    playground: config.isDev,
    context: async ({ req, res }) => ({ req, res })
  })
}