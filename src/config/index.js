require('dotenv').config();
const process = require('process');

module.exports = {
port: process.env.WEB_PORT,
username: process.env.DATABASE_USERNAME,
password: process.env.DATABASE_PASSWORD,
database: process.env.DATABASE,
host: process.env.HOST,
database_port: process.env.DATABASE_PORT
}