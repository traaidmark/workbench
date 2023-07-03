import express from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';

import { Server, ConfigInterface } from './server';
import './app';

const config: ConfigInterface = {
  middleware: [
    bodyParser.json(),
  ],
  port: 4000,
};


const server = new Server(config);

server.listen();