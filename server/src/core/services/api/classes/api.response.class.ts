
import { Response } from 'express';

export class ApiResponse {

  public respond = (res: Response, data: any) => {
    return {
      code: 200,
      message: 'string',
      data: data,
    }
  }

}