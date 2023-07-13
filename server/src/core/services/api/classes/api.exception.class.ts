import { ApiStatusCode } from '@/core/services/api';

// CLASS: EXCEPTIONS

export class ApiException extends Error {
    public readonly name: string;
    public readonly httpCode: ApiStatusCode;
    public readonly validationErrors?: any;

    constructor(
        name: string,
        httpCode: ApiStatusCode,
        description: string,
        validationErrors?: any,
    ) {
        super(description);
        this.name = name;
        this.httpCode = httpCode;
        this.validationErrors = validationErrors;

        Error.captureStackTrace(this, ApiException);
    }
}

export class BadRequestException extends ApiException {
  constructor(description = 'Bad Request', validationErrors?: any) {
      super('BAD REQUEST', ApiStatusCode.BAD_REQUEST, description, validationErrors);
  }
}

export class UnauthorizedException extends ApiException {
  constructor(description = 'Unauthorized') {
      super('UNAUTHORIZED', ApiStatusCode.UNAUTHORIZED, description);
  }
}

export class ForbiddenException extends ApiException {
  constructor(description = 'Forbidden') {
      super('FORBIDDEN', ApiStatusCode.FORBIDDEN, description);
  }
}

export class ConflictException extends ApiException {
  constructor(description = 'Conflict') {
      super('CONFLICT', ApiStatusCode.CONFLICT, description);
  }
}

export class InternalServerErrorException extends ApiException {
  constructor(description = 'Internal Server Error') {
      super('INTERNAL SERVER ERROR', ApiStatusCode.INTERNAL_SERVER, description);
  }
}

export class MethodNotAllowedException extends ApiException {
  constructor(description = 'Method Not Allowed') {
      super('METHOD NOT ALLOWRD', ApiStatusCode.METHOD_NOT_ALLOWED, description);
  }
}

export class NotFoundException extends ApiException {
  constructor(description = 'Not Found') {
      super('NOT FOUND', ApiStatusCode.NOT_FOUND, description);
  }
}

export class RequestTimeoutException extends ApiException {
  constructor(description = 'Request Timeout') {
      super('REQUEST TIMEOUT', ApiStatusCode.REQUEST_TIMEOUT, description);
  }
}