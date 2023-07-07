export interface ApiInterface<T> {
  default(): ApiResponse<T>;
}
export interface ApiResponse<T> {
  data?: T,
  message: string;
  errors?: string[];
}