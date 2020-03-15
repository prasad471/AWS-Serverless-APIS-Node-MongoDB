const { connectToDataBase } = require('../db');
const Task = require('../models/Task');

exports.createTask = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDataBase()
    .then(() => {
        Task.create(JSON.parse(event.body))
        .then(response => callback(null, {
          statusCode: 200,
          body: JSON.stringify(response)
        }))
        .catch(err => callback(null, {
          statusCode: err.statusCode || 500,
          headers: { 'Content-Type': 'text/plain' },
          body: 'Could not create the note.'
        }));
    })
    .catch(err => {
        console.log("database connection error", err);
        callback(null, {
            statusCode: err.statusCode || 500,
            headers: { 'Content-Type': 'text/plain' },
            body: 'Could not create the Task.'
          })
    })
};
