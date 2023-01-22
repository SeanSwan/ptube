const { Client } = require('pg');

const client = new Client({
  host: 'your_host',
  port: 'your_port',
  user: 'your_username',
  password: 'your_password',
  database: 'your_database_name'
});

client.connect();

module.exports = client;

// const { Client } = require('pg');

// const client = new Client({
// host: process.env.DB_HOST,
// port: process.env.DB_PORT,
// user: process.env.DB_USER,
// password: process.env.DB_PASSWORD,
// database: process.env.DB_NAME
// });

// client.connect();

// module.exports = client;

// It's a good practice to use a separate file to store your environmental
//  variables and import them when needed, such as in the above example. 
//  This file should be ignored in your version control system (e.g. .gitignore), 
//  so that your credentials are not accidentally leaked. Additionally, 
//  it's a good idea to name this file something like "config.js" and place it 
//  at the root of your project for easy access.