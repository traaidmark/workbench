import { Module } from '@/workbench/core';

import { HelloService } from './hello.service';

@Module({
  providers: [
    HelloService
  ]
})
export class HelloModule {}