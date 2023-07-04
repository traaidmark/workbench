import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

export enum UserRoleType {
  Crew = 'crew',
  Owner = 'owner',
  Manager = 'manager',
  Admin = 'admin',
}

export interface UserModel {
  id: string;
  username: string;
  password: string;
  role: UserRoleType;
}

// DATABASE TABLE

@Entity('User')
export class UserTable implements UserModel {

  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  role: UserRoleType;
}
