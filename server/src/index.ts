import 'reflect-metadata';
import 'module-alias/register';
import 'dotenv/config';

import { AppService } from '@/core';

import '@/app';

new AppService().init().start();