import { ClassProvider } from '@/app/tools/ioc';
import { AppProviderType } from '@/app/lib';

import { UserServiceInterface, User } from './lib';

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

// PROVIDER: SERVICE

export class UserService implements UserServiceInterface {
  fetchAll(): User[] {
    return data;
  }
}

// PROVIDER: DEFINITION

const userService: ClassProvider<UserServiceInterface> = {
  token: 'UserService',
  type: AppProviderType.Service,
  class: UserService,
}

export default userService;