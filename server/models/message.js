const Message = require('../db.js');

// ------ Defines the function that will do the queries to the database and export them -------
exports.getAll = async () => {
  const messages = await Message.find({});
  return messages;
};


exports.post = async (ctx) => {
  const result = await Message.create({ authorId: ctx.request.body.authorId, content: ctx.request.body.content, timestamp: ctx.request.body.timestamp });
  return result;
};