import * as path from "path";

const dbFile = `${path.resolve(__dirname, "../../../")}/.data/db.sqlite`;

export const dbOptions = {
  type: "sqlite",
  database: dbFile,
  entities: [],
  synchronize: true,
  logging: true,
}