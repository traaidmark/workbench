
import { Response } from 'express';

export class ApiResponse {
  
  private _res: Response;
  private _data: any;

  constructor(res: Response, data: any) {
    this._res = res;
    this._data = data;
  }

  public send = (): Response => {
    
    return this._res.send({
      code: 200,
      message: 'string',
      data: this._data,
    });
  }

}