import { faker } from '@faker-js/faker';

import { NAMESPACE } from './user.constants';
import { UserModel } from './user.schema';

// MOCK MODEL

// export const UserMock: MockModel<UserModel> = {
//   name: NAMESPACE,
//   count: 1,
//   persist: true,
//   entity: {
//     id: faker.string.uuid(),
//     email: faker.internet.email(),
//     password: faker.internet.password(),
//     createdAt: faker.date.past(),
//     updatedAt: faker.date.past(),
//     lastAuthAt: faker.date.past(),
//   }
// } 