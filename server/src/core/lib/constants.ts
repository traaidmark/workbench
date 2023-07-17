const path = require('path');

export const ROOT_PATH = path.resolve('../');
export const PUBLIC_PATH = path.resolve(`${ROOT_PATH}/public`);
export const SRC_PATH = path.resolve('./');

export const APP_MODULES_PATH = path.resolve('./app/modules');

export const DB_ENTITIES_PATH = path.resolve('./app/modules/**/*.entity.ts');
export const DB_MIGRATIONS_PATH = path.resolve('./migrations/**/*{.ts,.js}');