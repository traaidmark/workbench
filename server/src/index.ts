import 'reflect-metadata';
import 'module-alias/register';
import 'dotenv/config';

import { AppService } from '@/core';

import modules from '@/app';

const app = new AppService();

app.addModules(modules);

app.start();

// const app = new Server(container);

// app.build().start();