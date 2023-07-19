
import { LoggerServiceInterface } from '@/workbench/providers/core'

// SCHEMA: INTERFACES

export interface MetaServiceInterface {
  setnamespace(n: string): void;
  report(): void;
  log(): LoggerServiceInterface;
}

// SCHEMA: REPORTER MODEL

export interface MetaReport {
  name: string;
}