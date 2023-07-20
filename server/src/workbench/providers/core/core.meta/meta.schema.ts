
import { LoggerServiceInterface } from '@/workbench/providers/core'

// SCHEMA: INTERFACES

export interface MetaServiceInterface {
  setnamespace(n: string): void;
  report(meta: MetaReport): void;
  log(): LoggerServiceInterface;
}

// SCHEMA: REPORTER MODEL

export interface MetaReport {
  action: string;
  items: string[];
}