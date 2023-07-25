import { UserControllerInterface, User, UserServiceInterface } from './lib';

// @Provider('UserController')
export class UserController implements UserControllerInterface {

  private _service: UserServiceInterface = undefined;
  
  fetchAll(): User[] {
    // return [{ 'name': 'Just shit from controller'}];
    return this._service.fetchAll();
  }
}