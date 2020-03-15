const { connectToDataBase } = require('../db');
const Task = require('../models/Task');

exports.getAllTasks = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDataBase()
    .then(() => {
        Task.find()
        .then(tasks => callback(null, {
          statusCode: 200,
          body: JSON.stringify(tasks)
        }))
        .catch(err => callback(null, {
          statusCode: err.statusCode || 500,
          headers: { 'Content-Type': 'text/plain' },
          body: `Could not retrieve tasks due to ${err} `
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
