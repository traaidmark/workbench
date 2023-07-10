import 'reflect-metadata';
import 'module-alias/register';

import { Container, Server } from '@/system';

import '@/app';

const container = new Container().init();

const app = new Server(container);

app.build().start();