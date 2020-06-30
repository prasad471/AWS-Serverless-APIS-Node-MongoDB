const { connectToDataBase } = require("../db");
const Task = require("../models/Task");

exports.updateTask = async (event) => {
  try {
    await connectToDataBase();
    const result = await Task.findByIdAndUpdate(
      event.pathParameters.id,
      JSON.parse(event.body),{ new: true });
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
      body: JSON.stringify(error),
    };
  }
};
