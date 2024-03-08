import { getCustomRepository } from 'typeorm'
import { AuthenticationError } from 'apollo-server-core'
import { QueryResolversType } from '../generated/graphqlgen'
import { OrganizationHandler } from '../handler/OrganizationHandler'

const Query: QueryResolversType = {
  getOrganizationById: async (parent, args, ctx) => {
    const auth = true // Auth handler required
    if (auth) {
      const handler: OrganizationHandler = getCustomRepository(OrganizationHandler)
      return handler.getOrganizationById(args.id)
    } else {
      throw new AuthenticationError('You are not authorized to view this resource.')
    }
  },
}

export default Query
