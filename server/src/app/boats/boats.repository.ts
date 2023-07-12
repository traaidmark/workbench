import { ProviderType, Provider } from '@/core';

import { BoatsRepositoryInterface } from './boats.schema';

@Provider(ProviderType.Repository)
export class BoatsRepository implements BoatsRepositoryInterface {
 
  findOne() {
    return{
      'message': 'I am a single boat from repository'
    }
  }
  getAll() {
    return{
      'message': 'I am all boats from repository'
    }
  }

}