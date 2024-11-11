// conn.js
const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.DB_HOST || 'localhost', // PostgreSQL hostname or IP
  user: process.env.DB_USER || 'postgres',  // PostgreSQL username
  password: process.env.DB_PASSWORD || 'NewPassword1234', // PostgreSQL password
  database: process.env.DB_NAME || 'Techdome-DB',     // PostgreSQL database name
  port: process.env.DB_PORT || 5432                     // PostgreSQL port
});

// Export the pool to be used in other files
module.exports = pool;
