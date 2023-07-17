import { ObjectType, Repository } from "typeorm";

// SCHEMA: PROVIDER

export interface DatabaseInterface {
  getRepository(entity: ObjectType<any>): Promise<Repository<any>>;
}