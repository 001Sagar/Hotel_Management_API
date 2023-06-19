const { default: mongoose } = require("mongoose");

const db = mongoose.connection;

mongoose.connect('mongodb://127.0.0.1:27017/Hotal_Management');

db.once('open',function(err){
    if(err){
        console.log("Error in connecting to Databse", err);
        return;
    }
    console.log("connected to mongodb");
})