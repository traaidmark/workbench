import 'reflect-metadata';
import 'module-alias/register';
import 'dotenv/config';

import { Container, Server } from '@/core';

import '@/app';

const container = new Container().init();

const app = new Server(container);

app.build().start();