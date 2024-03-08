import { getCustomRepository } from 'typeorm'
import { AuthenticationError } from 'apollo-server-core'
import { MutationResolversType } from '../generated/graphqlgen'
import { DeveloperHandler } from '../handler/DeveloperHandler'

const Mutation: MutationResolversType = {
  addDeveloper: async (parent, args, ctx) => {
    const auth = true // Auth handler required
    if (auth) {
      const handler = getCustomRepository(DeveloperHandler)
      return handler.addDeveloper(args.input)
    } else {
      throw new AuthenticationError('You are not authorized to view this resource.')
    }
  },
}

export default Mutation
