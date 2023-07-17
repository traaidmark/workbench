import { IMockRepository } from '@/app/modules/mock';

import { InjectDataSource, Called } from '@/core/services/provider';
import { CreateRepository } from '@/core/services/api';

import { IMockDataSource } from '@/core/providers';

@CreateRepository
export class MockRepository implements IMockRepository {
  
  @InjectDataSource @Called('MockDataSource') private _source: IMockDataSource;
 
  getRandom = async () => {
    console.log('Hello:', this._source.generate())
    const data = new Promise((resolve, reject) => {
      resolve(this._source.generate());
    });

    return data;

  }

}