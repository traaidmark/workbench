import { CoreIoc} from './core.ioc';
import { ModuleTarget, ModuleInput } from './core.schema';
import { ERROR } from './core.constants';

export class CoreBootstrap {

  private _ioc: CoreIoc;
  private _hasRegistered: boolean;
  public appy;
  
  constructor() {
    this._ioc = new CoreIoc();
    // this.appy = this._container.get('app');
  }

  // PUBLIC METHODS

  public register = (module: ModuleTarget): this => {
    if(!module) {
      throw new Error(ERROR.BOOTSTRAP.noModule);
    }
    this._ioc.register(module);
    this._hasRegistered = true;
    return this;
  }
  
  public start = (): void => {
    if(!this._hasRegistered) {
      throw new Error(ERROR.BOOTSTRAP.hasNotRegistered);
    }
    // this.appy.start();
    console.log('[WORKBENCH] Starts')
  }

  // PRIVATE METHODS

}