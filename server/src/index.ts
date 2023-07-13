import 'reflect-metadata';
import 'module-alias/register';
import 'dotenv/config';

import { App } from '@/core';

import '@/app/modules';

import config from '@/config';

console.log('ENV', process.env.NODE_ENV);

const app = new App(config);

app.start();