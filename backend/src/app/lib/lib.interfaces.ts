import { Provider } from '@/app/tools/ioc';

// INTERFACE: APP

export interface AppInterface {
  load(providers: Provider[]): this;
  build(): this;
  start(): void;
}

// INTERFACE: PROVIDERS: TRANSPORT

// INTERFACE: PROVIDERS: SOURCE