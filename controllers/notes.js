const notesRouter = require('express').Router();
const notes = require('../notes.json');
const fs = require('fs');  // node js package for writing to files
const bodyParser = require('body-parser');

notesRouter.get('/', (request, response) => {
  response.send(notes);
})


notesRouter.post('/', (request, response) => {
  const requestBody = request.body;
  if (requestBody.title && requestBody.content) {
    notes.push(requestBody)
    response.status(201).send(requestBody);
  } else {
    response.status(400).send({ message: "title and content required to create a new note" })
  }
})

module.exports = notesRouter
//notesRouter.delete