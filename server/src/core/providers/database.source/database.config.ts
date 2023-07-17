import { DataSource } from 'typeorm';

import { DB_ENTITIES_PATH, DB_MIGRATIONS_PATH } from '@/core/lib/constants';

const appDataSource = new DataSource({
  type: 'sqlite',
  database: process.env.DATABASE_PATH,
  entities: [ DB_ENTITIES_PATH ],
  migrations: [ DB_MIGRATIONS_PATH ],
  migrationsTableName: 'workbench_migrations',
});

export default appDataSource;