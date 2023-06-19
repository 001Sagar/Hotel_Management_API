const { default: mongoose } = require("mongoose");

const adminschema = new mongoose.Schema({
    name:{
     type:String,
    },
    IsAdmin:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

const admin = mongoose.model('admin',adminschema);

module.exports = admin;