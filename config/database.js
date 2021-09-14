require('dotenv').config();

const config = {
    /*username: process.env.username,*/
    username:'root',
    password: process.env.password,
    database: process.env.database,
    host: 'localhost',
    dialect: 'mysql'
}

module.exports = config;