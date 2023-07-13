import { ProviderType, Provider } from '@/core';

import { IUserRepository } from '@/app/user';

@Provider(ProviderType.ApiRepository)
export class UserRepository implements IUserRepository {
 
  getRandom() {
    return{
      'message': 'I am a error from repository'
    }
  }

}