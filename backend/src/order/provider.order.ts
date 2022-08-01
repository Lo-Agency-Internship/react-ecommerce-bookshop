import { Provider } from '@nestjs/common';
import { Order } from './model';

export const ORDERPROVIDER = 'ORDER_REPOSITORY';

export const OrderProvider: Provider = {
  provide: ORDERPROVIDER,
  useValue: Order,
};
