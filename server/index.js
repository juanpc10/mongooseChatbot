// ------ Creates the server -------
const Koa = require('koa');
const app = new Koa();
// ---------------------------------

const mongo = require('koa-mongo');


// ------ Extra declarations -------
// For the middlewares
const serve = require('koa-static');
const bodyParser = require('koa-bodyparser');
const router = require('./router');
const path = require('path');

// For the listening
const port = 3000;
const hostname = 'localhost';
// ---------------------------------


// ------ Defines the middlewares -------
app
  .use(serve(path.join(__dirname, '../chat-client')))
  .use(bodyParser())
  .use(mongo())
  .use(router.routes());
// --------------------------------------


// ------ Listening the port and showing a message -------
app.listen(port, hostname, () => console.log(`Server running at http://${hostname}:${port}`)); // eslint-disable-line
// -------------------------------------------------------



// const mongoose = require("mongoose");
// const express = require("express");
// const app = express();
// const employees = require("./model");
// const router = express.Router();
// const port = 4000;

// var uri = "mongodb://localhost:27017/kennel";

// mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });

// const connection = mongoose.connection;

// connection.once("open", function() {
//   console.log("MongoDB database connection established successfully");
// });

// app.use("/", router);

// app.listen(port, function() {
//   console.log("Server is running on Port: " + port);
// });