import 'reflect-metadata';
import 'module-alias/register';
import 'dotenv/config';

import { App } from '@/core';

import '@/app';

console.log('ENV', process.env.NODE_ENV);

new App().start();