import { ProviderType, Provider } from '@/core';

import { IUserRepository } from '@/app/modules/user';

import Data from './user.static.data';

@Provider(ProviderType.ApiRepository)
export class UserRepository implements IUserRepository {
 
  getRandom() {
    return Data;
  }

}