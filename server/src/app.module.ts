import { Module } from './workbench/core';

import { ApiService, DatabaseService } from '@/workbench/providers';

@Module({
  providers: [
    DatabaseService,
    ApiService,
  ]
})
export class AppModule {}