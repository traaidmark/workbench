import { ClassProvider } from '@/app/tools/ioc';
import { AppProviderType } from '@/app/lib';

import { UserControllerInterface, User, UserServiceInterface } from './lib';

// PROVIDER: CONTROLLER

class UserController implements UserControllerInterface {

  private _service: UserServiceInterface = undefined;
  
  fetchAll(): User[] {
    // return [{ 'name': 'Just shit from controller'}];
    return this._service.fetchAll();
  }
}

// PROVIDER: DEFINITION

const userController: ClassProvider<UserControllerInterface> = {
  token: 'UserController',
  type: AppProviderType.Controller,
  class: UserController,
  imports: ['UserService'],
}

export default userController;