require('dotenv').config();

const config = {
    username: process.env.username,
    password: process.env.password,
    database: process.env.database,
    host: 'localhost',
    dialect: "mysql"
}

module.exports = config;