import { ApiInterface, ApiResponse } from '@/workshop/lib';

export enum UserRoleType {
  Admin = 'role:admin',
  Public = 'role:public',
}

export interface User {
  id: string;
  email: string;
  password: string;
  role: UserRoleType;
}

export interface UserControllerInterface extends ApiInterface<User> {
  get(): ApiResponse<User>;
}

// export interface UserController extends ApiInterface<> {
//   all(): Promise<User[]>;
//   one(): Promise<User>;
//   create(): Promise<User>;
//   update(): Promise<User>;
// }