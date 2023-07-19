import winston from 'winston';

import { RegisterCore } from '@/workbench/core';

import { LoggerServiceInterface } from './logger.schema';

@RegisterCore
export class LoggerService implements LoggerServiceInterface {

  private _namespace: string = 'Workbench';

  private _customLevels = {
    levels: {
      trace: 5,
      debug: 4,
      info: 3,
      warn: 2,
      error: 1,
      fatal: 0,
    },
    colors: {
      trace: 'blue',
      debug: 'green',
      info: 'green',
      warn: 'yellow',
      error: 'red',
      fatal: 'red',
    },
  };

private _formatter = winston.format.combine(
  winston.format.colorize(),
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  winston.format.splat(),
  winston.format.printf((info) => {
    const { timestamp, level, message, ...meta } = info;
    return `${timestamp} [${this._namespace}] [${level}]: ${message} ${
      Object.keys(meta).length ? JSON.stringify(meta, null, 2) : ''
    }`;
  }),
);

private _logger: winston.Logger;

constructor() {
  const errorTransport = new winston.transports.File({
    filename: '../logs/error.log',
    level: 'error',
  });

  const transport = new winston.transports.Console({
    format: this._formatter,
  });

  this._logger = winston.createLogger({
    level: process.env.NODE_ENV === 'dev' ? 'trace' : 'error',
    levels: this._customLevels.levels,
    transports: [
      process.env.NODE_ENV === 'dev' ? transport : errorTransport
    ],
  });

  winston.addColors(this._customLevels.colors);

}

  public setNamespace(n: string) {
    this._namespace = n;
  }

  public trace(msg: any, meta?: any): void {
    this._logger.log('trace', msg, meta);
  }

  public debug(msg: any, meta?: any): void {
    this._logger.debug(msg, meta);
  }
    
  public info(msg: any, meta?: any): void {
    this._logger.info(msg, meta);
  }
    
  public warn(msg: any, meta?: any): void {
    this._logger.warn(msg, meta);
  }
    
  public error(msg: any, meta?: any): void {
    this._logger.error(msg, meta);
  }
    
  public fatal(msg: any, meta?: any): void {
    this._logger.log('fatal', msg, meta);
  }
}
