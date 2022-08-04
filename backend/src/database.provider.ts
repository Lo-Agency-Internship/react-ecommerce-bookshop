import { Provider } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { Book } from './book/model';
import { Order, OrderedBook } from './order/model';
import { User } from './user/model';
import * as bcrypt from 'bcrypt';

export const DatabaseProvider: Provider<Sequelize> = {
  provide: 'SEQUELIZE',
  useFactory: async () => {
    const sequelize = new Sequelize({
      dialect: 'sqlite',
      storage: './db.sqlite',
    });

    sequelize.addModels([Book, Order, OrderedBook, User]);

    await sequelize.sync();
    const admin = await User.findOne({ where: { role: 'admin' } });
    
    if (!admin) {
      const salt = await bcrypt.genSalt();
      let password = '12345678';
      password = await bcrypt.hash(password, salt);
      console.log("testtttttt",password)
      await User.create({
        name: 'admin',
        email: 'admin@admin.com',
        password: password,
        role: 'admin',
      });
    }
    return sequelize;
  },
};
