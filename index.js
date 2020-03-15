const { createTask } = require('./handlers/createTask');
const { getTask } = require('./handlers/getTask');
const { getAllTasks } = require('./handlers/getAllTasks');
const { updateTask } = require('./handlers/updateTask');
const { deleteTask } = require('./handlers/deleteTask');




module.exports = {
     createTask,
     getTask,
     getAllTasks,
     updateTask,
     deleteTask
}