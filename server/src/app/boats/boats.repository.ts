
import { Provider  } from '@/system/decorators';
import { Type } from '@/system/lib';

import { BoatsRepositoryInterface } from './boats.schema';

@Provider(Type.Provider.Repository)
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