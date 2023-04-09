require('dotenv').config();
const pg_name = process.env.PGDATABASE;
const pg_user = process.env.PGUSER;
const pg_password = process.env.PGPASSWORD;
const pg_host = process.env.PGHOST;
const pg_port = process.env.PGPORT;

module . exports = {
    pg_name,
    pg_user,
    pg_password,
    pg_host,
    pg_port
}