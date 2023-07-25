
// SCHEMA: USER

export interface User {
  name: string;
}

// INTERFACE: USER CONTROLLER

export interface UserControllerInterface {
  fetchAll(): User[];
}

// INTERFACE: USER SERVICE

export interface UserServiceInterface {
  fetchAll(): User[];
}
