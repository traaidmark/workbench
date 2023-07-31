import { Provider } from 'ioc-container';

// INTERFACE: BENCH

export interface BenchInterface {
  load(providers: Provider[]): this;
  init(): this;
  build(): this;
  start(): void;
}

export interface BenchProviders {
  transports: BenchTransportInterface[];
}

// INTERFACE: PROVIDERS: TRANSPORT

export interface BenchTransportInterface {
  init(controllers: []): this;
  build(controllers: []): this;
  start(): void;
}

// INTERFACE: PROVIDERS: SOURCE