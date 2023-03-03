const{DataTypes} = require ("sequelize");
const connections = require ("../db/connections");

const Book = connections.define("Book", {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    author:{
        type: DataTypes.STRING,
    },
    genre:{
        type:DataTypes.STRING,
    },
})
module.exports = Book;