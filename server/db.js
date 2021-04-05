const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/chatBot', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;


db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('CONCETED TO THE DATABASE!! :)');
});

const messageSchema = new mongoose.Schema({
  authorId: Boolean,
  content: String,
  timestamp: Number,
});
const Message = mongoose.model('message', messageSchema);

module.exports = Message;