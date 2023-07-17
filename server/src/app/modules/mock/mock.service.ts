import { ProviderType, Provider, AddRepository, Called } from '@/core';

import {
  IMockService,
  IMockRepository,
  CONFIG,
} from '@/app/modules/mock';

@Provider(ProviderType.ApiService)
export class MockService implements IMockService {
  
  @AddRepository @Called(CONFIG.names.Repository) _repo: IMockRepository;
 
  getRandom = async (): Promise<unknown> => {

    try {

      const data = await this._repo.getRandom();

      console.log('mock service:', data)

      return data;

    } catch(err) {
      throw new Error(err.message);
    }

    
  }

}