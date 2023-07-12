import { ProviderType, Provider, AddRepository, Called } from '@/core';

import { BoatsServiceInterface, BoatsRepositoryInterface, Boats } from './boats.schema';

@Provider(ProviderType.ApiService)
export class BoatsService implements BoatsServiceInterface {
  
  @AddRepository @Called(Boats.Repository) _repo: BoatsRepositoryInterface;
 
  findOne() {
    return this._repo.findOne()
  }
  getAll() {
    return this._repo.getAll()
  }

}