export interface ResponseModel<T> {
  data?: T;
  error?: ResponseError[];
  meta?: Meta;
}

export interface ResponseError {
  description: string;
  code: string;
}
export interface Meta {
  count: number;
  offset: number;
  limit: number;
}