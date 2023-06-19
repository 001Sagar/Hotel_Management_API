const { default: mongoose } = require("mongoose");

const userschema = new mongoose.Schema({
    username:{
     type:String,
    },
    email:{
     type:String,
    },
    password:{
     type:String,
    }
},{
    timestamps:true
})

const user = mongoose.model('user',userschema);

module.exports = user;