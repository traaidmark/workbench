import { injectable, inject, named } from 'inversify';

import { CONTAINER_TYPE } from '@/workshop/lib/constants';

import { UserRepository } from './user.repository';

import { ApiInterface, ApiResponse } from '@/workshop/lib';
import { User, UserControllerInterface } from './user.schema';

@injectable()

export class UserController implements UserControllerInterface {
  private _repository: UserRepository;

  constructor(
    @inject(CONTAINER_TYPE.Repository) 
    @named('UserRepository') 
    repo: UserRepository
  ) {
    this._repository = repo;
  } 

  default() {
    const data = this._repository.get();
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