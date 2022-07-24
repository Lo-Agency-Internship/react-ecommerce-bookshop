const { DataTypes } = require('sequelize');
const sequelize = require('./database')

const BookByOrder = require('./bookByOrder')


const Book = sequelize.define('Book',
    {
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        genre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        publisher: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize
    })

Book.hasMany(BookByOrder)
BookByOrder.belongsTo(Book)

module.exports = Book;
