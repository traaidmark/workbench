import { ProviderType, Provider } from '@/core';

import { IUserRepository, User } from '@/app/modules/user';

import { UserUtils } from '@/app/utils/user.utils';


// ESM
import { faker } from '@faker-js/faker';

export function createRandomUser(): User {
  return {
    id: faker.string.uuid(),
    username: faker.internet.email(),
    password: faker.internet.password(),
    createdAt: faker.date.past(),
    updatedAt: faker.date.past(),
    lastAuthAt: faker.date.past(),
  };
}

export const USERS: any[] = faker.helpers.multiple(createRandomUser, {
  count: 5,
});

@Provider(ProviderType.ApiRepository)
export class UserRepository implements IUserRepository {
 
  getRandom() {
    const data = new Promise((resolve, reject) => {

      const userMock = new UserUtils();

      console.log('DATA GENERATED?', USERS);

      resolve(userMock.generate());
    });

    return data;

  }

}