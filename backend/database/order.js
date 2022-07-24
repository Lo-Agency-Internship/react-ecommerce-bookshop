const { DataTypes } = require('sequelize');
const sequelize = require('./database')

const BookByOrder = require('./bookByOrder')

const Order = sequelize.define('Order',
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        orderCode: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        deletedAt: {
            type: DataTypes.TIME
        }
    },
    {
        sequelize
    })

Order.hasMany(BookByOrder)
BookByOrder.belongsTo(Order)

module.exports = Order