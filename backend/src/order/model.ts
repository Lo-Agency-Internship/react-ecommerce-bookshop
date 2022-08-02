import { DataTypes } from 'sequelize';
import {
  Column,
  CreatedAt,
  DeletedAt,
  ForeignKey,
  HasMany,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';
import { Book } from 'src/book/model';
import { User } from 'src/user/model';

@Table
export class Order extends Model {
  @Column({ type: DataTypes.INTEGER, allowNull: true, })
  orderCode: number;

  @ForeignKey(() => User)
  @Column
  userId: number;

  @HasMany(() => OrderedBook)
  orderedBooks: OrderedBook[];
}

@Table
export class OrderedBook extends Model {
  @Column({ type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 })
  count: number;

  @Column({ type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 })
  price: number;

  @ForeignKey(() => Order)
  @Column
  orderId: number;

  @ForeignKey(() => Book)
  @Column
  bookId: number;
}
