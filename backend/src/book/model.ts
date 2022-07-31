import { DataTypes } from 'sequelize';
import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import { OrderedBook } from 'src/order/model';

@Table
export class Book extends Model {
  @Column({ type: DataTypes.INTEGER, allowNull: false })
  price: number;

  @Column({
    type: DataTypes.STRING,
    allowNull: false,
  })
  author: string;

  @Column({
    type: DataTypes.STRING,
    allowNull: false,
  })
  title: string;

  @Column({
    type: DataTypes.STRING,
    allowNull: false,
  })
  genre: string;

  @Column({
    type: DataTypes.STRING,
    allowNull: false,
  })
  publisher: string;

  @HasMany(() => OrderedBook)
  orders: OrderedBook[];
}
