var express = require('express');
var router = express.Router();
const Admin = require('../Models/Admin');
const chalk = require('chalk');


router.post('/create-admin', (req, res) => {
    const newAdmin = new Admin(req.body);
  
    newAdmin.save()
      .then(result => {
        res.status(200).send(result);
        console.log(chalk.bold.green("The Admin is created successfully !"));
      })
      .catch(err => {
        console.log(err);
      });
  });

  module.exports = router