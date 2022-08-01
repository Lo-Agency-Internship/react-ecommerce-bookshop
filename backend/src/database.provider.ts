import { Provider } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { Book } from './book/model';
import { Order, OrderedBook } from './order/model';
import { User } from './user/model';

export const DatabaseProvider: Provider<Sequelize> = {
  provide: 'SEQUELIZE',
  useFactory: async () => {
    const sequelize = new Sequelize({
      dialect: 'sqlite',
      storage: './db.sqlite',
    });

    sequelize.addModels([Book, Order, OrderedBook, User]);

    await sequelize.sync();

    return sequelize;
  },
};
