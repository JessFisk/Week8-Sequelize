const {Sequelize} = require ("sequelize");

const connections = new Sequelize (process.env.MYSQL_URI);

connections.authenticate()

console.log("DB connection is working");

module.exports = connections;