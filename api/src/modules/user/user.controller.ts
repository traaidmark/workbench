import { inject, named } from 'inversify';

import { Controller, Get } from '@/workshop/decorators';
import { ProviderType, ApiResponse, ApiControllerMeta } from '@/workshop/lib';

import { UserRepository } from './user.repository';
import { User, UserControllerInterface } from './user.schema';

@Controller('/')
export class UserController implements UserControllerInterface {
  // private _repository: UserRepository;

  // constructor(
  //   @inject(ProviderType.Repository) 
  //   @named('UserRepository') 
  //   repo: UserRepository
  // ) {
  //   this._repository = repo;
  // }

  @Get('/')
  default() {
    return {
      message: 'hello world',
    }
    // return this._repository.get();
  }

  @Get('/all')
  get() {
    const success: ApiResponse<User> = {
      message: 'hello world',
    }
    return success;
  }
}