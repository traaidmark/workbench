import { inject, named } from 'inversify';

import { Provider } from '@/workshop/decorators';
import { ProviderType } from '@/workshop/lib';

import { UserRepository } from './user.repository';

import { ApiResponse } from '@/workshop/lib';
import { User, UserControllerInterface } from './user.schema';

@Provider({
  type: ProviderType.Controller
})
export class UserController implements UserControllerInterface {
  private _repository: UserRepository;

  constructor(
    @inject(ProviderType.Repository) 
    @named('UserRepository') 
    repo: UserRepository
  ) {
    this._repository = repo;
  } 

  default() {
    return this._repository.get();
  }
  
  get() {
    const success: ApiResponse<User> = {
      message: 'hello world',
    }
    return success;
  }
}