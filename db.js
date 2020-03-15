const mongoose = require('mongoose');
const { MONGO_URI } = require('./dbconfig.json');
mongoose.Promise = global.Promise;
let isConnected;

exports.connectToDataBase = () =>{
    if(isConnected){
        console.log("Using Existing DataBase Connection");
        return Promise.resolve();
    }

    console.log("Using New DataBase Connection");
    return mongoose.connect(MONGO_URI)
      .then(db => { 
        isConnected = db.connections[0].readyState;
      });

}