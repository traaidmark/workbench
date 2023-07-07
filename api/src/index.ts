import 'reflect-metadata';
import 'module-alias/register';

// import { inject } from 'inversify';

import { Container, Server } from '@/workshop';
// import { serverOptions } from '@/app/config';

import '@/modules';
import {UserController} from '@/modules/';
import { SystemMeta, ProviderType } from '@/workshop/lib';

const meta:string = SystemMeta.Util.Container;

const container = new Container().init();

const app = new Server(container);

app.build().start();