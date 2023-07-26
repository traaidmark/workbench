import { Provider } from '@/app/tools/ioc';

// INTERFACE: APP

export interface AppInterface {
  load(providers: Provider[]): this;
  init(): this;
  build(): this;
  start(): void;
}

export interface AppProviders {
  transports: AppTransportInterface[];
}

// INTERFACE: PROVIDERS: TRANSPORT

export interface AppTransportInterface {
  init(controllers: []): this;
  build(controllers: []): this;
  start(): void;
}

// INTERFACE: PROVIDERS: SOURCE