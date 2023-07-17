import {
  CreateRepository,
} from '@/core/services/api';

import { UserModel, UserRepoInterface } from './user.schema';

@CreateRepository
export class UserRepository implements UserRepoInterface {

  // @InjectService @Called(SERVICE_NAME) private _service: MockServiceInterface;

  // fetchAll()
  // [Description]: Fetches all users
  public fetchAll = (): UserModel[] => {
    return []
  }

}

