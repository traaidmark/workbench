import 'reflect-metadata';
import { Server } from './system/server';
import { serverOptions } from './config';

let server = new  Server(serverOptions);

server.listen();