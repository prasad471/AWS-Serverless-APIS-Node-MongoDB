const { connectToDataBase } = require("../db");
const Task = require("../models/Task");

exports.deleteTask = async (event) => {
  try {
    await connectToDataBase();
    const result = await Task.findByIdAndRemove(event.pathParameters.id);
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*", // Required for CORS support to work
        "Access-Control-Allow-Credentials": true, // Required for cookies, authorization headers with HTTPS
      },
      body: JSON.stringify(result),
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*", // Required for CORS support to work
        "Access-Control-Allow-Credentials": true, // Required for cookies, authorization headers with HTTPS
      },
      body: "Could not make an entry.",
    };
  }
};
