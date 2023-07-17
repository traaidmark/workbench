import { ProviderType, Provider } from '@/core';

import { IMockRepository } from '@/app/modules/mock';

import {
  AddRepository,
} from '@/core/services/api';

// ESM
import { faker } from '@faker-js/faker';

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

@AddRepository
export class MockRepository implements IMockRepository {
 
  getRandom = async () => {
    const data = new Promise((resolve, reject) => {
      resolve(MockS);
    });

    return data;

  }

}