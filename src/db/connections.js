const {Sequelize} = require ("sequelize");

const connections = new Sequelize (process.env.MYSQL_URI, {
    retry: {match: [/Deadlock/i], max:3 }});

connections.authenticate()

console.log("DB connection is working");

module.exports = connections;