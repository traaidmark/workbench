import { HelloModule } from '@/workbench/modules';
import { Module } from './workbench/core';

@Module({
  providers: [
    HelloModule
  ]
})
export class AppModule {}