var express = require('express');
var router = express.Router();
const User = require('../Models/User');
const bcrypt=require('bcrypt');
const chalk = require('chalk');
const jwt = require("jsonwebtoken");
router.use(express.json());
require('dotenv').config()

//Get all entered Users
router.get('/get-all-users', (req, res) => {
  
  User.find()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.log(err);
    });
});

//Get a certain entered user with a known attribute
/*router.get('/get-all-user/:id', (req, res) => {
    User.find({id:req.params.id})
      .then(result => {
        res.send(result);
      })
      .catch(err => {
        console.log(err);
      });
  });
*/
  //search
  router.post('/search', (req, res) => {
    User.find(req.body)
      .then(result => {
        res.send(result);
      })
      .catch(err => {
        console.log(err);
      });
  });
  
  // creating new Flight
  router.post('/create-user', async (req, res) => {
    console.log(req.body);
   const user= req.body;
  
   const takenUsername= await User.findOne({username: user.username})
   const takenEmail = await User.findOne({Email: user.Email})
   
if (takenUsername|| takenEmail){
  console.log("username or email already taken")
}
else{
 
  user.Password= await bcrypt.hash(req.body.Password,10)

  const dbUser = new User({
    username:user.username.toLowerCase(),
    Email:user.Email.toLowerCase(),
    Password:user.Password,
    FirstName:user.FirstName.toLowerCase(),
    LastName:user.LastName.toLowerCase(),
    PassportNumber:user.PassportNumber.toLowerCase(),
    Age:user.Age.toLowerCase(),
    Nationality:user.Nationality.toLowerCase(),
    PhoneNumber:user.PhoneNumber.toLowerCase()
  })
  dbUser.save()
  res.json(dbUser);
  console.log("User created Successfully!")
  
}
  });
  router.get("/getusername",authenticateToken,(req,res)=>{
    res.json({isLoggedIn: true, username:req.user.username})
  })

  router.post("/login", async (req,res)=>{ 
    const userlogin= req.body;
    User.findOne({username:userlogin.username})
    .then(dbUser=> {
      if(!dbUser){
        console.log("not valid username")
      }
      else{ 
        console.log(userlogin.Password)
        console.log(dbUser.Password)
       bcrypt.compare(userlogin.Password,dbUser.Password).then(isCorrect => {
         console.log(isCorrect)
        if(isCorrect) {
          const payload= {
            id: dbUser._id,
            username: dbUser.username,
            
            
          }
          jwt.sign(
            payload,
            process.env.JWT_SECRET,
            {expiresIn:86400},
            (err,token)=>{
              if(err){
                console.log("error")
              }
              else{
                console.log(token)
                console.log("here" + dbUser)
                res.json(dbUser);
                
                return res.json({
                  message: "Success",
                  token: "Bearer "+ token
                  
                })
                
              }
            }
          )
        }
        else{
          console.log("invalid Username or Password")
        }
      })
    }
  })
})
function authenticateToken(req,res,next){
  const authheader = req.headers['authorization']
  const token = authheader && authheader.split(' ')[1]
  if(token ==null) return res.sendStatus(401)
   
  jwt.verify(token,process.env.JWT_SECRET, (err,user)=>{
    if(err) return res.sendStatus(403)
    req.user = user
    next()
  })
}
  //Updating an existing User
  router.patch('/update-User/:id', (req,res)=>{
    User.updateMany({id: req.params.id}, req.body).then(result =>{

        res.status(200).send("User updated ");
        console.log(chalk.bold.blue('The User is Updated successfully !'));
    }).catch(err => {
        console.log(err);
      });

  });
  router.patch('/updatepassword', (req,res)=>{
    console.log("entered backend")
    bcrypt.compare(req.body.Oldpassword,req.body.currentPass).then(isCorrect => {
      console.log(isCorrect)
     if(isCorrect) {
      User.updateMany({id: req.params.id}, req.body.Newpassword).then(result =>{
        res.status(200).send("User updated ");
        console.log(chalk.bold.blue('The User is Updated successfully !'));
    }).catch(err => {
        console.log(err);
      });
         
       }
      
    

  });
});

  //Deleting an existing User
  router.delete('/delete-user/:id', (req,res)=>{
    console.log("nnnnn");
    User.deleteMany(req.params.id, req.body).then(result =>{

        res.status(200).send("User Deleted ");
        console.log(chalk.bold.red("The User is deleted successfully !"));
    }).catch(err => {
        console.log(err);
      });

  });

  module.exports = router;
