import { Provider } from '@nestjs/common';
import { Order , OrderedBook } from './model';


export const ORDERPROVIDER = 'ORDER_REPOSITORY';
export const ORDERBOOKPROVIDER = 'ORDERBOOK_REPOSITORY';

export const OrderProvider: Provider = {
  provide: ORDERPROVIDER,
  useValue: Order,
};


export const OrderBookProvider: Provider = {
  provide: ORDERBOOKPROVIDER,
  useValue: OrderedBook,
};
