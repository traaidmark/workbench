import { RegisterCore, InjectCore, Called } from '@/workbench/core';

import { MetaServiceInterface } from './meta.schema';
import { LoggerServiceInterface } from '@/workbench/providers/core';

@RegisterCore
export class MetaService implements MetaServiceInterface {

  @InjectCore @Called('Logger') private _log: LoggerServiceInterface;

  public setnamespace = (n: string) => {
    this._log.setNamespace(n);
  };

  public report = () => {
    this._log.info('');
    this._log.info('Available Modules: {');
    this._log.info('- item 1');
    this._log.info('- item 1');
    this._log.info('- item 1');
    this._log.info('- item 1');
    this._log.info('}');
    this._log.info('');
  }

  public log = (): LoggerServiceInterface => {
    return this._log;
  }
}