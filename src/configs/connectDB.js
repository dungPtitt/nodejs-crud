const {Sequelize} = require('sequelize');
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_DATABASE_NAME, 
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: process.env.DB_DIALECT,
  logging: false
  }
);

let checkConnectDB = async ()=>{
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

module.exports = checkConnectDB;

// import mysql from "mysql2/promise";
// require("dotenv").config();
// const pool = mysql.createPool(
//   {
    // host: process.env.DB_HOST, 
    // user: process.env.DB_USERNAME, 
    // password: process.env.DB_PASSWORD,
    // database: process.env.DB_DATABASE_NAME
//   }
//   );
// export default pool;
