const {Sequelize} = require ("sequelize");

const cnnections = new Sequelize (process.env.MYSQL_URI);

connection.authenticate()

console.log("DB connection is working");

module.express = connections;