import { ProviderType, Provider, AddRepository, Name, name } from '@/core';

import { BoatsServiceInterface, BoatsRepositoryInterface } from './boats.schema';

@Provider(ProviderType.ApiService)
export class BoatsService implements BoatsServiceInterface {
  
  // @AddRepository @Name('BoatsRepository') _repo: BoatsRepositoryInterface;
 
  findOne() {
    return{
      'message': 'I am a single boat from Service'
    }
  }
  getAll() {
    return{
      'message': 'I am all boats from Service'
    }
  }

}