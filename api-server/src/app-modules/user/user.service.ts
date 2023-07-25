import { Provider } from '@/maker';

import { UserServiceInterface, User } from './lib';


@Provider('UserService')
export class UserService implements UserServiceInterface {
  fetchAll(): User[] {
    return data;
  }
}

const data = [
  {
    name: 'ADRIAN'
  },
  {
    name: 'ANTHEA'
  },
  {
    name: 'AIDEN'
  },
  {
    name: 'ALASKA'
  }

]