import { AppProviderType, AppProvider } from '@/core';

import { BoatsRepositoryInterface } from './boats.schema';

@AppProvider(AppProviderType.Repository)
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