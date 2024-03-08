import { EntityRepository, Repository, getRepository } from 'typeorm'
import { DeveloperCreateInput } from '../generated/graphqlgen'
import { DeveloperEntity } from '../database/DeveloperEntity'

@EntityRepository(DeveloperEntity)
export class DeveloperHandler extends Repository<DeveloperEntity> {

  public addDeveloper(info: DeveloperCreateInput): Promise<DeveloperEntity> {
    return getRepository(DeveloperEntity)
      .save({
        ...info,
        dateCreated: new Date().toISOString(),
      })
  }

  public getDeveloper(id: string): Promise<DeveloperEntity> {
    return this.createQueryBuilder('developer')
      .where('developer.id = :id', { id: id })
      .getOne()
  }
}
