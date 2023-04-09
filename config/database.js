const { pg_user } = require("./env");
const { pg_password } = require("./env");
const { pg_name } = require("./env");
const { pg_host } = require("./env");
const { pg_port } = require("./env");

module.exports = {
  "development": {
    "username": pg_user,
    "password": pg_password,
    "database": pg_name,
    "host": pg_host,
    "dialect": "postgres",
    "port": pg_port
  },
  "test": {
    "username": pg_user,
    "password": pg_password,
    "database": pg_name,
    "host": pg_host,
    "dialect": "postgres",
    "port": pg_port
  },
  "production": {
    "username": pg_user,
    "password": pg_password,
    "database": pg_name,
    "host": pg_host,
    "dialect": "postgres",
    "port": pg_port
  }
}
