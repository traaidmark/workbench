import { Provider } from '@/workshop/decorators';
import { ProviderType, ApiResponse } from '@/workshop/lib';

import { User } from './user.schema';

@Provider({
  type: ProviderType.Repository
})
export class UserRepository {

  get() {
    const success: ApiResponse<User> = {
      message: 'hello world from repository!',
    }
    return success;
  }

}