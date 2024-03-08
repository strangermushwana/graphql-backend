import { Resolvers } from '../generated/graphqlgen'
import Mutation from './Mutation'
import { OrganizationResolver } from './Organization'
import Query from './Query'

const resolvers: Resolvers = {
  Query,
  Mutation,
  Organization: OrganizationResolver,
}

export default resolvers
