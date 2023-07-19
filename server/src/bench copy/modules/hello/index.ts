import { injectable } from 'inversify';

export interface HelloInterface {
  world(): void;
}

@injectable()
export class Hello implements HelloInterface {
  world() {
    console.log('HELLO WORLD THIS WORKS')
  }
}