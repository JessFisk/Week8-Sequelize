const{DataTypes} = require ("sequelize");
const connections = require ("../db/connections");

const Author = connections.define("Author", {
    authorName: {
        type: DataTypes.STRING,
    },
    
})

module.exports = Author;