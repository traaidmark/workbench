import { InjectDataSource, Called } from '@/core/services/provider';
import {
  CreateRepository,
} from '@/core/services/api';

import { DatabaseInterface } from '@/core/providers/database.source/database.schema';

import { UserModel, UserRepoInterface } from './user.schema';

@CreateRepository
export class UserRepository implements UserRepoInterface {

  @InjectDataSource @Called('Database') private _db: DatabaseInterface;

  // fetchAll()
  // [Description]: Fetches all users
  public fetchAll = async (): Promise<UserModel[]> => {
    try {
      // const db = await this._db.getRepository(User);
      return [];
    } catch(err) {
      console.log('REPO ERROR', err.message)
    }
  }

}

