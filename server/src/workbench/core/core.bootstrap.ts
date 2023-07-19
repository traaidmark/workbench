import { CoreIoc} from './core.ioc';

import { ModuleTarget, ProviderType } from './core.schema';
import { ERROR } from './core.constants';

import { LoggerServiceInterface } from '@/workbench/providers/core';

export class CoreBootstrap {

  private _ioc: CoreIoc;
  private _hasRegistered: boolean;
  private _log: LoggerServiceInterface
  
  constructor() {
    this._ioc = new CoreIoc();
  }

  // PUBLIC METHODS

  public register = (module: ModuleTarget): this => {
    if(!module) {
      throw new Error(ERROR.BOOTSTRAP.noModule);
    }
    this._ioc.loadModule(module);
    this._hasRegistered = true;
    return this;
  }
  
  public start = (): void => {
    if(!this._hasRegistered) {
      throw new Error(ERROR.BOOTSTRAP.hasNotRegistered);
    }

    // Initialise stuff before we start up
    this._init();
    
    // this.appy.start();
    this._log.info('App Initialised!')
  }

  // PRIVATE METHODS

  private _init = ():void => {
    this._log = this._ioc.getByName(ProviderType.Core, 'Logger');
    this._log.setNamespace('CORE');
  }

}