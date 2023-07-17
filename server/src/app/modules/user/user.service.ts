import { Called } from '@/core/services/provider';
import {
  CreateService,
  InjectRepository,
} from '@/core/services/api';

import { UserModel, UserServiceInterface, UserRepoInterface } from './user.schema';
import { REPOSITORY_NAME } from './user.constants';

@CreateService
export class UserService implements UserServiceInterface {

  @InjectRepository @Called(REPOSITORY_NAME) private _repo: UserRepoInterface;

  // fetchAll()
  // [Description]: Fetches all users
  public fetchAll = (): UserModel[] => {
    return this._repo.fetchAll(); 
  }

}

