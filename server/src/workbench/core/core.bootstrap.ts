import { CoreIoc} from './core.ioc';
import { ModuleTarget, ModuleInput } from './core.schema';

export class CoreBootstrap {

  private _ioc: CoreIoc;
  public appy;
  
  constructor() {
    this._ioc = new CoreIoc();
    // this.appy = this._container.get('app');
  }

  // PUBLIC METHODS

  public load = (module: ModuleTarget): this => {
    console.log('[WORKBENCH] MODULES', module)
    return this;
  }
  
  public start = (): void => {
    // this.appy.start();
    console.log('[WORKBENCH] Starts')
  }

  // PRIVATE METHODS

}