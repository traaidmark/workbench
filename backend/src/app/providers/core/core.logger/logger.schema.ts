import {LogMethod} from 'winston';

// SCHEMA: ADJUST

export interface LogResponse extends LogMethod {};

// SCHEMA: SERVICE INTERFACE

export interface LoggerServiceInterface {
  setNamespace(n: string): void;
  trace(msg: any, meta?: any): void;
  debug(msg: any, meta?: any): void;
  info(msg: any, meta?: any): void;
  warn(msg: any, meta?: any): void;
  error(msg: any, meta?: any): void;
  fatal(msg: any, meta?: any): void;
}