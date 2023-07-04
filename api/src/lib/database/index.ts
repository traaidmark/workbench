import "reflect-metadata";
import { DataSource } from "typeorm";

import { UserTable } from '../../app';

import { appPaths } from '../static';

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: `${appPaths.root}/.data/db.sqlite`,
    entities: [UserTable],
    synchronize: true,
    logging: true,
}); 