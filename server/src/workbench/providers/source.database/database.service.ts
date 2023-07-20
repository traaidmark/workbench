import { SourceProvider } from '@/workbench/core';

export interface DatabaseServiceInterface {
  world(): void;
}

@SourceProvider
export class DatabaseService implements DatabaseServiceInterface {
  world() {
    console.log('HELLO WORLD THIS WORKS')
  }
}