const { connectToDataBase } = require('../db');
const Task = require('../models/Task');

exports.deleteTask = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDataBase()
    .then(() => {
        Task.findByIdAndRemove(event.pathParameters.id)
        .then(task => callback(null, {
          statusCode: 200,
          body: JSON.stringify({ message: 'Removed task with id: ' + task._id, task: note })
        }))
        .catch(err => callback(null, {
          statusCode: err.statusCode || 500,
          headers: { 'Content-Type': 'text/plain' },
          body: `Could not remove task due to ${err} `
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
