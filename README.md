# AWS-Serverless-APIS-Node-MongoDB

Serverless APIS Using Node and MongoDB
==============================================

Prerequisite
-----------
- Create an [AWS Account](https://aws.amazon.com/
)
- Install [Node.js](https://nodejs.org/en/download/)
- Create a [MongoDB cluster] using MongoDB Atlas (https://www.mongodb.com/cloud/atlas)
- Install serverless Node module globally(Run npm install serverless -g)
- Configure your AWS accesskey and secret access key in serverless(https://serverless.com/framework/docs/ providers/aws/guide/credentials/)


What's Here
-----------

This project includes:

* README.md - this file

* serverless.yml - this file is used by AWS to package your service for deployment to AWS Lambda

* index.js - this file contains the AWS Lambda handlers

* dbconfig.json - this file contains MongoDB URI



# What does this project create? 

You are creating 5 APIs.
Resources: 
---

- 1 Create a new Task
- 2 Get a task by id
- 3 Get all tasks
- 4 Update a task 
- 5 Delete a task 



# Tutorial

After installing all the pre reqs and cloning the repo you can do the following to get the project up and running. 


Running the project locally
------------------

After you have cloned the repo `git clone https://github.com/prasad471/AWS-Serverless-APIS-Node-MongoDB`

And after you have installed the Prerequisites.

You can run: 

    1. npm install

    2. sls offline start

Serverless will run your apis locally, you can test your apis using postman.
After testing the APIS locally,
Just run: 
    sls deploy
