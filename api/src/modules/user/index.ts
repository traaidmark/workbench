import { Module } from '@/workshop/decorators';
// import { ModelInterface } from '@/workshop/lib/interfaces';

export * from './user.schema';
export * from './user.controller';
export * from './user.repository';

import { UserController } from './user.controller';

@Module({
  name: 'User',
  // repository: UserRepository,
  controller: UserController,
})
export class PostModule {}