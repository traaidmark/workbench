import { ProviderType, Provider, AddRepository, Called } from '@/core';

import {
  CONFIG,
  IMockService,
  IMockRepository,
} from '@/app/modules/mock';

import {
  AddService, InjectRepository,
} from '@/core/services/api';

@AddService
export class MockService implements IMockService {
  
  @InjectRepository @Called(CONFIG.names.Repository) _repo: IMockRepository;
 
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