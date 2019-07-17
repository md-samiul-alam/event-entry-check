require('dotenv').config()

console.log('mongo uri: ', process.env.MONGO_URI)
const config = {
  port: process.env.PORT,
  mongoUri: process.env.MONGO_URI,
};

module.exports = config;
