const { DataTypes } = require('sequelize');
const sequelize = require('./database')

const BookByOrder = sequelize.define('BookByOrder', {
    count: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},
    {
        sequelize
    })
module.exports = BookByOrder;

