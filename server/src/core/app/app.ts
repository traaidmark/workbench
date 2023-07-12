import { AppInterface } from '@/core/app';

import { ApiService } from '@/core/services/api';
import { ProviderService } from '@/core/services/provider';

export class App implements AppInterface {

  private _server: ApiService;
  private _provider: ProviderService;
  
  constructor() {
    this._provider = new ProviderService();
    this._server = new ApiService(this._provider);
  }

  // PUBLIC METHODS

  public start = (): void => {
    this._server.build().start();
  }

  // PRIVATE METHODS

}