const homeroute = require('../routes/user_route');
const User = require('../models/usermodel');


// Use bcrypt to convert the Password into Hashform
const bcrypt = require('bcrypt');

// Controllor for SignUp
module.exports.SignUp = async function(req,res){
    try {
    const salt = await bcrypt.genSalt(10); 
    const hashpass = await bcrypt.hash(req.body.password,salt)
    const new_user = new User({
        username: req.body.username,
        email: req.body.email,
        password:hashpass
    })    
    const user = await new_user.save();
    return res.status(200).json({
        message:"Registered Successfulyy",
        user
    })
    } catch (error) {
        console.log(error);
        return res.status(200).json(error);
    }
}


// Controllor for Login
module.exports.login = async function(req,res){
    try {
       const user = await User.findOne({
        email:req.body.email
       }) 
       if(!user){
        return res.status(404).json('user is not found');
       }
       const validte = await bcrypt.compare(req.body.password, user.password);
       if(!validte){
        return res.status(403).json('Wrong password')
       }
       return res.status(200).json(user);
    } catch (error) {
        console.log(error);
        return res.status(200).json(error)
    }
}


// Controllor for Update Password
module.exports.update = async function(req,res){
    try {
        const user = await User.findOne({
            email:req.body.email
           }) 
           if(!user){
            return res.status(404).json('user is not found');
           }
           const validte = await bcrypt.compare(req.body.password, user.password);
           if(!validte){
            return res.status(403).json('Wrong password')
           } 
        const new_password = req.body.new_password;
        const salt = await bcrypt.genSalt(10); 
        const hashpass = await bcrypt.hash(new_password,salt);

        const update = await User.findByIdAndUpdate(user._id,{
            password:hashpass
        })   
        return res.status(200).json({
            message:"Updated Successfully",
            update
        })
    } catch (error) {
        console.log(error);
        return res.status(200).json(error)
    }
    }


// Controllor for Delete the user
module.exports.delete = async function(req,res){
    try {
        const user = await User.findOne({
            email:req.body.email
           }) 
           if(!user){
            return res.status(404).json('user is not found');
           }
           const validte = await bcrypt.compare(req.body.password, user.password);
           if(!validte){
            return res.status(403).json('Wrong password')
           } 
      const del = await User.findByIdAndDelete(user._id,{
        id:user._id
      })
      return res.status(200).json({
        meassage:"Deleted Successfully"
      })
    } catch (error) {
        console.log(error);
        return res.status(200).json(error)
    }
}