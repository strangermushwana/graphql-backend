import { getCustomRepository } from 'typeorm'
import { DeveloperHandler } from '../handler/DeveloperHandler'
import { AuthenticationError } from 'apollo-server-core'
import { QueryResolversType } from '../generated/graphqlgen'

const Query: QueryResolversType = {
  developer: async (parent, args, ctx) => {
    const auth = true // Auth handler required
    if (auth) {
      const handler = getCustomRepository(DeveloperHandler)
      return handler.getDeveloper(args.id)
    } else {
      throw new AuthenticationError('You are not authorized to view this resource.')
    }
  },

  user: async (parent, args, ctx) => {
    return {
      id: '12345678',
      name: 'Blake Norman',
      age: 26,
    }
  },

}

export default Query
