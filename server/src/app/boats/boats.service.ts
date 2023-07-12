import { ProviderType, Provider } from '@/core';

import { BoatsServiceInterface } from './boats.schema';

@Provider(ProviderType.ApiService)
export class BoatsService implements BoatsServiceInterface {
 
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