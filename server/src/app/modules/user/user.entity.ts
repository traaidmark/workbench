import { faker } from '@faker-js/faker';

import { UserModel } from './user.schema';

// ENTITY: MOCK TEMP

export const mockUserEntity: UserModel = {
  id: faker.string.uuid(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  createdAt: faker.date.past(),
  updatedAt: faker.date.past(),
  lastAuthAt: faker.date.past(),
}