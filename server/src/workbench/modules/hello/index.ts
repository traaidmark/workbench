import { Module } from '@/workbench/core';

import { HelloProvider } from './hello.provider';

@Module({
  providers: [
    HelloProvider
  ]
})
export class HelloModule {}