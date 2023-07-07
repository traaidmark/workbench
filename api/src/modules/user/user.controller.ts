import { inject, named } from 'inversify';

import { Provider } from '@/workshop/decorators';
import { ProviderType, ApiResponse } from '@/workshop/lib';

import { UserRepository } from './user.repository';
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

  // @Get('/')
  default() {
    return this._repository.get();
  }
  // @Get('/all')
  get() {
    const success: ApiResponse<User> = {
      message: 'hello world',
    }
    return success;
  }
}