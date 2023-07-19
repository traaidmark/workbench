import 'reflect-metadata';
import 'module-alias/register';
import 'dotenv/config';

import { CoreBootstrap } from '@/workbench/core';
import { AppModule } from './app.module';

const app = new CoreBootstrap();
app
.load(AppModule)
.start();
