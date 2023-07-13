import { AppOptions, IApp } from '@/core/app';

import { ApiService } from '@/core/services/api';
import { ProviderService } from '@/core/services/provider';

export class App implements IApp {

  private _server: ApiService;
  private _provider: ProviderService;
  public _opts: AppOptions;
  
  constructor(options: AppOptions) {
    this._provider = new ProviderService();
    this._opts = options;

    this._server = new ApiService(this._provider, this._opts.api!);
    
  }

  // PUBLIC METHODS

  public start = (): void => {
    this._server.start();
  }

  // PRIVATE METHODS

}