
export interface HelloServiceInterface {
  world(): void;
}

export class HelloService implements HelloServiceInterface {
  world() {
    console.log('HELLO WORLD THIS WORKS')
  }
}