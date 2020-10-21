const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const notesRouter = require('./controllers/notes');

app.use(bodyParser.json());

app.use((request, response, next) => {
  console.log('This is a new request');
  console.log('IP:', request.ip);
  console.log('Method:', request.method);

  next();
})

app.use('/notes', notesRouter);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log('My server is up!');
})