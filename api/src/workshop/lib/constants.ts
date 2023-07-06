// CONSTANTS: INVERSIFY 

export const CONTAINER_TYPE = {
  Controller: Symbol.for('Controller'),
  HttpContext: Symbol.for('HttpContext'),
};

// CONSTANTS: PARAM TYPES

export enum PARAMETER_TYPE {
  REQUEST,
  RESPONSE,
  PARAMS,
  QUERY,
  BODY,
  HEADERS,
  COOKIES,
  NEXT,
  PRINCIPAL
}

// CONSTANTS: META DATA TYPES

export enum META_TYPE {
  Controller = 'workshop:controller',
  ControllerMethod = 'workshop:controller-method',
  Middleware = 'workshop:middleware',
  HttpContext = 'workshop:http-context',
}

// CONSTANTS: HTTP VERB TYPES

export enum HTTP_TYPE {
  Get = 'get',
  Put = 'put',
  Post = 'post',
  Delete = 'delete',
  Patch = 'patch',
}

// CONSTANTS: MESSAGES

export const MESSAGE = {
  controller: {
    duplicate: 'lol, no dupes boet',
    notFound: 'nee, jy het fokkol',
  }
}