// export * from './user.constants';

import { Provider, ClassProvider } from 'files/tools';

export * from './lib';

import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserControllerInterface, UserServiceInterface } from './lib';


const controller: ClassProvider<UserControllerInterface> = {
  token: 'UserController',
  type: 'Controller',
  class: UserController,
  imports: ['UserService'],
  asSingleton: true,
}

const service: ClassProvider<UserServiceInterface> = {
  token: 'UserService',
  type: 'Service',
  class: UserService,
}

export const UserModule: Provider[] = [
  controller, service
];