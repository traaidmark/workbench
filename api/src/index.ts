import 'reflect-metadata';
import 'module-alias/register';

// import { inject } from 'inversify';

import { Container } from '@/workshop';
// import { serverOptions } from '@/app/config';

import '@/modules';
import {UserController} from '@/modules/';
import { ContainerType } from './workshop/lib/constants';

const container = new Container().init();

const userController = container.getNamed<UserController>(ContainerType.Controller, 'UserController')

userController.default();

console.log('I am index', userController.default()) 
