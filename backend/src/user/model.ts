import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { Order } from 'src/order/model';

@Table
export class User extends Model {
  @Column({ type: DataTypes.STRING, allowNull: false })
  name: string;

  @Column({ type: DataTypes.STRING, allowNull: false })
  email: string;

  @Column({ type: DataTypes.STRING, allowNull: false })
  password: string;

  @Column({ type: DataTypes.STRING, allowNull: false })
  salt: string;

  @Column({ type: DataTypes.STRING, allowNull: true })
  address: string;

  @Column({ type: DataTypes.STRING, allowNull: false })
  role: string;

  @HasMany(() => Order)
  orders: Order[];
}
