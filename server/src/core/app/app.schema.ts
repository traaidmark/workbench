import { ApiOptions } from '@/core/services/api';


// SCHEMA: INTERFACES

export interface IApp {
  start(): void;
}

export interface AppOptions {
  env?: string;
  api?: ApiOptions;
}