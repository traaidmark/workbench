import { injectable, inject, named } from 'inversify';

import { Provider } from '@/workshop/decorators';
import { ProviderType } from '@/workshop/lib';

// import { UserRepository } from './user.repository';

import { ApiInterface, ApiResponse } from '@/workshop/lib';
import { User, UserControllerInterface } from './user.schema';

@Provider({
  type: ProviderType.Controller
})
export class UserController implements UserControllerInterface {
  // private _repository: UserRepository;

  // constructor(
  //   @inject(ContainerType.Repository) 
  //   @named('UserRepository') 
  //   repo: UserRepository
  // ) {
  //   this._repository = repo;
  // } 

  default() {
    // const data = this._repository.get();
    const success: ApiResponse<User> = {
      message: 'hello world',
    }
    return success;
  }
  get() {
    const success: ApiResponse<User> = {
      message: 'hello world',
    }
    return success;
  }
}