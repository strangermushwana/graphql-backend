import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { ColumnDateTransformer } from './transformers/dateTransformer'

@Entity({
  name: 'organization',
})
export class OrganizationEntity {

  @PrimaryGeneratedColumn('uuid')
  public id: string

  @Column({
    type: 'varchar',
    nullable: false,
  })
  public title: string

  @Column({
    type: 'varchar',
    nullable: false,
  })
  public email: string

  @CreateDateColumn({
    type: 'timestamptz',
    nullable: false,
    precision: 3,
    default: () => 'CURRENT_TIMESTAMP(3)',
    transformer: new ColumnDateTransformer(),
  })
  public createdDate: string

}