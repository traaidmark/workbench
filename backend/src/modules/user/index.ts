// export * from './user.constants';

import { Provider } from '@/app/tools/ioc';

import userController from './user.controller';
import userService from './user.service';

// PROVIDER: MODULE

export const userProviders: Provider[] = [
  userController,
  userService,
];