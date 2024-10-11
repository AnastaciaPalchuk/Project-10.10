const { Client } = require('pg');
require('dotenv').config();
const config = require("../config/index")


class DataBase {
  constructor() {
     this.client = new Client({
      user: config.username,
      password: config.password,
      database: config.database,
      host: config.host,
      port: config.database_port,
    });
  }

  users = [];

  async connect() {
    await this.client.connect();
  }

  async query(sql) {
    return this.client.query(sql)
  }
}

module.exports = new DataBase();
