import 'reflect-metadata';
import 'module-alias/register';

import { Container } from '@/app/tools';
import { App } from '@/app';

import appModule from './app.module';

const app = new App(new Container());

app
  .load(appModule)
  .init()
  .build()
  .start();