import { injectable, inject } from 'inversify';



@injectable()
export class UserRepository {

  get() {
    return 'hello from the repository!';
  }

}