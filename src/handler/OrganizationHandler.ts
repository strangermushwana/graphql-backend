import { EntityRepository, Repository, getRepository } from 'typeorm'
import { OrganizationEntity } from '../database/OrganizationEntity'
import { OrganizationCreateInput } from 'generated/graphqlgen'

@EntityRepository(OrganizationEntity)
export class OrganizationHandler extends Repository<OrganizationEntity> {

  public getOrganizationById(id: string): Promise<OrganizationEntity> {
    return this.createQueryBuilder('organization')
      .where('organization.id = :id', { id: id })
      .getOne()
  }

  public createOrganization(data: OrganizationCreateInput): Promise<OrganizationEntity> {
    return getRepository(OrganizationEntity)
      .save({
        ...data,
        createdDate: new Date().toISOString(),
      })
  }
}
