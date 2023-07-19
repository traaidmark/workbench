import { RegisterSource } from '@/workbench/core';

export interface DatabaseServiceInterface {
  world(): void;
}

@RegisterSource
export class DatabaseService implements DatabaseServiceInterface {
  world() {
    console.log('HELLO WORLD THIS WORKS')
  }
}