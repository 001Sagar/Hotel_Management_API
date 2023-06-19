const homeroute = require('../routes/user_route');
const Room = require('../models/room_model');
const User = require('../models/usermodel');

// Book the room 
module.exports.book = async function(req,res){
    try {
     const new_room = new Room({
         username: req.body.username,
         roomnumber: req.body.roomnumber
     })   
     const existinguser = await User.findOne({username:req.body.username})
     if(!existinguser){
        return res.status(403).json('User is not exists , please provide correct username');
     }
     const existingRoom = await Room.findOne({ roomnumber:req.body.roomnumber });
    if (existingRoom) {
      return res.status(403).json('Room is already booked');
    }
     const room = await new_room.save();
     return res.status(200).json({
        message: "Room Booked Successfully",
        room
      });
    } catch (error) {
    console.log(error);
    return res.status(500).json(error);
    }
}


// Check the room
module.exports.check = async function(req,res){
    try {
      const room = await Room.findOne({
        roomnumber:req.body.roomnumber
      })
      if(!room){
        return res.status(404).json("Room is not found");
      }
      return res.status(200).json(room);
    } catch (error) {
      console.log(error);
    return res.status(500).json(error);
    }
}