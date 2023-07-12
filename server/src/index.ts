import 'reflect-metadata';
import 'module-alias/register';
import 'dotenv/config';

import { App } from '@/core';

import '@/app';

new App().start();