import { RegisterFoundation } from '@/workbench/core';

export interface ApiServiceInterface {
  world(): void;
}

@RegisterFoundation
export class ApiService implements ApiServiceInterface {
  world() {
    console.log('HELLO WORLD THIS WORKS')
  }
}