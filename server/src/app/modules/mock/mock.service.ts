import { ProviderType, Provider, AddRepository, Called } from '@/core';

import {
  IMockService,
  IMockRepository,
  CONFIG,
} from '@/app/modules/mock';

@Provider(ProviderType.ApiService)
export class MockService implements IMockService {
  
  @AddRepository @Called(CONFIG.names.Repository) _repo: IMockRepository;
 
  getRandom() {
    return this._repo.getRandom()
  }

}