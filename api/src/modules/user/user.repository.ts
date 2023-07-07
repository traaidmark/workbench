import { Provider } from '@/workshop/decorators';
import { ProviderType } from '@/workshop/lib';

@Provider({
  type: ProviderType.Repository
})
export class UserRepository {

  get() {
    return 'hello from the repository!';
  }

}