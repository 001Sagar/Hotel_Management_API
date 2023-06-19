const { default: mongoose } = require("mongoose");

const roomSchema = new mongoose.Schema({
    // username:{
    //     type : mongoose.Schema.Types.ObjectId,
    //     ref : 'user'
    // },
    username:{
        type :String,
        requied : true
    },
    roomnumber:{
        type:Number,
        required:true
    }
},{
    timestamps:true
})

const room = mongoose.model('room',roomSchema);

module.exports = room;