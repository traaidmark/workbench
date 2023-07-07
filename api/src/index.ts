import 'reflect-metadata';
import 'module-alias/register';

// import { inject } from 'inversify';

import { Container } from '@/workshop';
// import { serverOptions } from '@/app/config';

import '@/modules';
import {UserController} from '@/modules/';
import { CONTAINER_TYPE } from './workshop/lib/constants';

const container = new Container().init();

const userController = container.getNamed<UserController>(CONTAINER_TYPE.Controller, 'UserController')

userController.get();

console.log('I am index', userController.get()) 
