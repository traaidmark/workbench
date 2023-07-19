
export interface HelloProviderInterface {
  world(): void;
}

export class HelloProvider implements HelloProviderInterface {
  world() {
    console.log('HELLO WORLD THIS WORKS')
  }
}