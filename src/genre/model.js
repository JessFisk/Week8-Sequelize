const{DataTypes} = require ("sequelize");
const connections = require ("../db/connections");

const Genre = connections.define("Genre", {
    genre: {
        type: DataTypes.STRING,
    },
})

module.exports = Genre;

