var express = require('express');
var router = express.Router();
const User = require('../Models/User');

const chalk = require('chalk');

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
  router.post('/create-user', (req, res) => {
    console.log("@@@@@@@@@@@@@@@@@@");
    console.log(req.body);
    const newUser = new User(req.body);
  
    newUser.save()
      .then(result => {
        res.status(200).send(result);
        console.log(chalk.bold.green("The User is created successfully !"));
      })
      .catch(err => {
        console.log(err);
      });
  });

  //Updating an existing User
  router.patch('/update-User/:id', (req,res)=>{
    User.updateMany({id: req.params.id}, req.body).then(result =>{

        res.status(200).send("User updated ");
        console.log(chalk.bold.blue('The User is Updated successfully !'));
    }).catch(err => {
        console.log(err);
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
