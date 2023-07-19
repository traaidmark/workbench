import { RegisterCore } from '@/workbench/core';

export interface LoggerServiceInterface {
  world(): string;
}

@RegisterCore
export class LoggerService implements LoggerServiceInterface {
  world(): string {
    return 'World from logger!'
  }
}