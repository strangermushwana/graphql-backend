import { Organization, OrganizationResolversType } from 'generated/graphqlgen'

export const OrganizationResolver: OrganizationResolversType = {
  id: (parent: Organization) => parent.id,
  email: (parent: Organization) => parent.email ?? null,
  title: (parent: Organization) => parent.title ?? null,
}
