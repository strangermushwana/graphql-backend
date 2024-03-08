import { getCustomRepository } from 'typeorm'
import { AuthenticationError } from 'apollo-server-core'
import { MutationResolversType } from '../generated/graphqlgen'
import { OrganizationHandler } from '../handler/OrganizationHandler'

const Mutation: MutationResolversType = {
  createOrganization: async (parent, args, ctx) => {
    const auth = true // TODO: implement this
    if (auth) {
      const handler: OrganizationHandler = getCustomRepository(OrganizationHandler)
      return handler.createOrganization(args.input)
    } else {
      throw new AuthenticationError('You are not authorized to view this resource.')
    }
  },
}

export default Mutation
