import { TransportationProvider } from '@/workbench/core';

export interface ApiServiceInterface {
  world(): void;
}

@TransportationProvider
export class ApiService implements ApiServiceInterface {
  world() {
    console.log('HELLO WORLD THIS WORKS')
  }
}