const { connectToDataBase } = require("../db");
const Task = require("../models/Task");

exports.createTask = async (event) => {
  try {
    await connectToDataBase();
    const result = await Task.create(JSON.parse(event.body));
    return {
      statusCode: 201,
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
