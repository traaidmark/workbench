import { faker } from '@faker-js/faker';
import { CreateDataSource } from '@/core/services/provider';

import { IMockDataSource } from './mock.schema';



export function createRandomMock() {
  return {
    id: faker.string.uuid(),
    Mockname: faker.internet.email(),
    password: faker.internet.password(),
    createdAt: faker.date.past(),
    updatedAt: faker.date.past(),
    lastAuthAt: faker.date.past(),
  };
}

export const MockS: any[] = faker.helpers.multiple(createRandomMock, {
  count: 5,
});



@CreateDataSource
export class MockDataSource implements IMockDataSource {
  private _delay: number;
  private _data: number;
  
  
  public create() {
    
  }

  public generate() {

    function createRandomMock() {
      return {
        id: faker.string.uuid(),
        Mockname: faker.internet.email(),
        password: faker.internet.password(),
        createdAt: faker.date.past(),
        updatedAt: faker.date.past(),
        lastAuthAt: faker.date.past(),
      };
    }
    
    const MockS: any[] = faker.helpers.multiple(createRandomMock, {
      count: 5,
    });

    return MockS;
  }
}