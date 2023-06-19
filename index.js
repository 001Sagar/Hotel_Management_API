const express = require('express');
const port = 8000 || process.env.PORT;
const app = express();

// Aquired mongodb DataBase
const db = require('./config/mongoose')

// Require Body Parser
app.use(express.json());
app.use(express.urlencoded({extended:true}))


// Check Server is run or not
app.get('/',(req,res)=>{
    res.send("<h1> Yeah !! Server is Run</h1>")
})

const route = require('./routes/user_route.js');
app.use('/user',route);

app.listen(port, function(err){
    if(err){
        console.log(err);
        return
    }
    console.log("Server is Run on ::", port);
})