import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

import { UserModel } from './user.schema';

@Entity('users')
export class UserTable implements UserModel {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @Column()
  lastAuthAt: Date;

}