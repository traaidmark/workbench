import { faker } from '@faker-js/faker';

import { User } from '../modules';

const makeUser = () => {
  return {
    id: faker.string.uuid,
    username: faker.internet.email,
    password: faker.internet.password,
    createdAt: faker.date.past,
    updatedAt: faker.date.recent,
    lastAuthAt: undefined,
  }
};

const model = {
  id: faker.string.uuid(),
  username: faker.internet.email,
  password: faker.internet.password,
  createdAt: faker.date.past,
  updatedAt: faker.date.recent,
  lastAuthAt: undefined,
}

export class UserUtils {
  private _model: any = {
    id: faker.string.uuid,
    username: faker.internet.email,
    password: faker.internet.password,
    createdAt: faker.date.past,
    updatedAt: faker.date.recent,
    lastAuthAt: undefined,
  };
  public data: any[];

  private _maker = () => this._model;

  public generate() {
    const data = faker.helpers.multiple(this._maker, {
      count: 5,
    })
    return [...data];
  }
}