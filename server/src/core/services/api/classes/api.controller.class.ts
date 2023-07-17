import { injectable } from 'inversify';
import { ApiHttpContext, injectHttpContext, ApiResponse } from '@/core/services/api';

@injectable()
export class ApiBaseController {
  
  @injectHttpContext protected readonly httpContext!: ApiHttpContext;


  public send<T>(data: T) {
    const res = this.httpContext.response;
    res.status(200).send({
      code: 200,
      message: 'this worked',
      data
    })
  }

}