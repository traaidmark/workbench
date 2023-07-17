import { ProviderType, Provider } from '@/core';

import { IMockRepository, Mock } from '@/app/modules/mock';


// ESM
import { faker } from '@faker-js/faker';

export function createRandomMock(): Mock {
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

@Provider(ProviderType.ApiRepository)
export class MockRepository implements IMockRepository {
 
  getRandom = async () => {
    const data = new Promise((resolve, reject) => {
      resolve(MockS);
    });

    return data;

  }

}