const route = require('express').Router();


const usercontroller = require('../controllors/usercontrolloer');
 const roomcontroller = require('../controllors/bookroom')
const admincontroller = require('../controllors/admincontrollor');


//Router for the user Signup, Login ,update password and Delete the user 
route.post('/SignUp',usercontroller.SignUp);
route.get('/login',usercontroller.login);
route.put('/updatepassword',usercontroller.update);
route.delete('/delete',usercontroller.delete);



//Routee for the User book the Room and check the room
route.post('/bookroom',roomcontroller.book);
route.get('/check',roomcontroller.check);


//Router for the admin update and delete the room
 route.put('/updateroom',admincontroller.update);
 route.delete('/deleteroom',admincontroller.delete);

module.exports = route;