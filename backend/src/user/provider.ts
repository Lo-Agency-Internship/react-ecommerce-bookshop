import { Provider } from '@nestjs/common';
import { User } from './model';

export const PROVIDER = 'USER_REPOSITORY';

export const UsersProvider: Provider = {
  provide: PROVIDER,
  useValue: User,
};
