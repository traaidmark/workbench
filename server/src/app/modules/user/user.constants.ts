export const CONFIG = {
  namespace: 'User',
  routes: {
    prefix: '/users',
    get: '/',
  },
  names: {
    Controller: `UserController`,
    Repository: `UserRepository`,
    Service: `UserService`,
  }
}
