import 'reflect-metadata';
import bodyParser from 'body-parser';
import { ConnectionOptions, createConnection } from "typeorm"

import { AppDataSource } from './lib';

import { Server, ConfigInterface } from './server';
import './app';

const config: ConfigInterface = {
  middleware: [
    bodyParser.json(),
  ],
  port: 4000,
};

async function main () {
  AppDataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })
  
  const server = new Server(config);
  server.listen();
}

main().catch(console.error)



