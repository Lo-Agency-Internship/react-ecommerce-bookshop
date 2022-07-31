import { Provider } from '@nestjs/common';
import { Book } from './model';

export const PROVIDER = 'BOOK_REPOSITORY';

export const BooksProvider: Provider = {
  provide: PROVIDER,
  useValue: Book,
};
