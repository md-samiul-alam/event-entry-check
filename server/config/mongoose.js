const mongoose = require('mongoose');

const config = require('./config');

// connect to mongo db
const mongoUri = config.mongoUri || `mongodb+srv://halum:aq10bEGf7ordiWYT@cluster0-sdiyd.mongodb.net/test?retryWrites=true&w=majority`;
mongoose.connect(mongoUri, { useNewUrlParser: true });
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${mongoUri}`);
});

module.exports = mongoose
