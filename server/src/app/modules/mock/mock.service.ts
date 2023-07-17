import { Called } from '@/core/services/provider';
import { CreateService, InjectRepository } from '@/core/services/api';

import {
  CONFIG,
  IMockService,
  IMockRepository,
} from '@/app/modules/mock';

@CreateService
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