import { CoreProvider, InjectCore, Called } from '@/workbench/core';

import { LoggerServiceInterface } from '@/workbench/providers/core';

import { MetaServiceInterface, MetaReport } from './meta.schema';


@CoreProvider
export class MetaService implements MetaServiceInterface {

  @InjectCore @Called('Logger') private _log: LoggerServiceInterface;

  public setnamespace = (n: string) => {
    this._log.setNamespace(n);
  };

  public report = (meta: MetaReport) => {
    this._log.info('');
    this._log.info(`${meta.action}: {`);
    meta.items.forEach((i) => this._log.info(`- ${i}`));
    this._log.info('}');
    this._log.info('');
  }

  public log = (): LoggerServiceInterface => {
    return this._log;
  }
}