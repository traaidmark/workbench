
// MODEL

export interface UserModel {
  id: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  lastAuthAt: Date;
}