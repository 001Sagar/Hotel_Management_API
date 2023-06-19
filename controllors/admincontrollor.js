const homeroute = require('../routes/user_route');
const Room = require('../models/room_model');


// Admin Can update the Room
module.exports.update = async function(req,res){
    try {
        const room = await Room.findOne({
            roomnumber:req.body.roomnumber
          })
          if(!room){
            return res.status(404).json("Room is not found");
          }
          if(req.body.IsAdmin==false){
            return res.status(403).json("Only admin can update the room"); 
          }
          const updateroom = await Room.findByIdAndUpdate(room._id,{
            roomnumber:req.body.newroomnumber
          })
          return res.status(200).json({
            message:"Room updated Successfully",
            updateroom
          })
    } catch (error) {
        console.log(error);
        return res.status(200).json(error)
    }
}


// Admin can Delete the Room
module.exports.delete = async function(req,res){
    try {
        const room = await Room.findOne({
            roomnumber:req.body.roomnumber
          })
          if(!room){
            return res.status(404).json("Room is not found");
          }
          if(req.body.IsAdmin!=true){
            return res.status(404).json("Only admin can update the room"); 
          }
     const del = await Room.findByIdAndDelete(room._id,{
        id:room._id
     })
     return res.status(200).json({
        message:"Deleted Sucessfully",
        del
     })
    } catch (error) {
        console.log(error);
        return res.status(200).json(error)
    }
}