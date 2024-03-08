import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({
  name: 'developer',
})
export class DeveloperEntity {

  @PrimaryGeneratedColumn('uuid')
  public id: string

  @Column({
    type: 'varchar',
    length: 50,
    nullable: false,
  })
  public firstName: string

  @Column({
    type: 'varchar',
    length: 50,
    nullable: false,
  })
  public lastName: string

  @Column({
    type: 'varchar',
  })
  public phoneNumber: string

  @Column({
    type: 'varchar',
    nullable: false,
  })
  public username: string

  @Column({
    type: 'varchar',
  })
  public bio: string

  @Column({
    type: 'varchar',
  })
  public profileURL: string

  @Column({
    type: 'varchar',
    length: 50,
    nullable: false,
  })
  public email: string

}