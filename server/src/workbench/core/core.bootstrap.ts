import { injectable } from 'inversify';

import { CoreIoc} from './core.ioc';

import { ModuleTarget, ModuleInput, ProviderType } from './core.schema';
import { ERROR } from './core.constants';

import { LoggerServiceInterface } from '@/workbench/providers';

@injectable()
export class CoreBootstrap {

  private _ioc: CoreIoc;
  private _hasRegistered: boolean;
  private _logger: LoggerServiceInterface;
  
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
    console.log('[WORKBENCH] What is logger?!', this._logger.world());
    console.log('[WORKBENCH] Starts')
  }

  // PRIVATE METHODS

  private _init = ():void => {
    this._logger = this._ioc.getByName<LoggerServiceInterface>(ProviderType.Core, 'LoggerService');
  }

}