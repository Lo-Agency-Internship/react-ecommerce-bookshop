import { Provider } from '@nestjs/common';
import { OrderedBook } from './model';

export const ORDERBOOKPROVIDER = 'ORDERBOOK_REPOSITORY';

export const OrderBookProvider: Provider = {
  provide: ORDERBOOKPROVIDER,
  useValue: OrderedBook,
};
