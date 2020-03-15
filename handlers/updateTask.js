const { connectToDataBase } = require('../db');
const Task = require('../models/Task');

exports.updateTask = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDataBase()
    .then(() => {
        Task.findByIdAndUpdate(event.pathParameters.id, JSON.parse(event.body), { new: true })
        .then(task => callback(null, {
          statusCode: 200,
          body: JSON.stringify(task)
        }))
        .catch(err => callback(null, {
          statusCode: err.statusCode || 500,
          headers: { 'Content-Type': 'text/plain' },
          body: `Could not update task due to ${err} `
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
