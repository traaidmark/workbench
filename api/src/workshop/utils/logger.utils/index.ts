import { SystemMeta, SystemType } from '@/workshop/lib';

export class Logger {
  private _meta: SystemMeta;

  constructor(meta: SystemMeta) {
    this._meta = meta;
  }

  info(msg: string, obj?: object | object[] | string | string[]) {
    console.log(`[${this._meta.type} / ${this._meta.name}]: ${msg}`, obj ? obj : '');
  }
}