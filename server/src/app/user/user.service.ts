import { ProviderType, Provider, AddRepository, Called } from '@/core';

import {
  IUserService,
  IUserRepository,
  CONFIG,
} from '@/app/user';

@Provider(ProviderType.ApiService)
export class UserService implements IUserService {
  
  @AddRepository @Called(CONFIG.names.Repository) _repo: IUserRepository;
 
  getRandom() {
    return this._repo.getRandom()
  }

}