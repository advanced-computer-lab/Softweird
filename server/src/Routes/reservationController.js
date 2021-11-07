var express = require('express');
var router = express.Router();
const Reservation = require('../Models/Reservation');

const chalk = require('chalk');

  // creating new Reservation
  router.post('/create-Reservation', (req, res) => {
    const newReservation = new Reservation(req.body);
  
    newReservation.save()
      .then(result => {
        res.status(200).send(result);
        console.log(chalk.bold.green("The Flight is created successfully !"));
      })
      .catch(err => {
        console.log(err);
      });
  });

  //Updating an existing Reservation
  router.put('/update-reservation/:id', (req,res)=>{
    Reservation.findByIDAndUpdate(req.params.ID,req.body).then(result =>{

        res.status(200).send("Reservation updated ");
        console.log(chalk.bold.blue('The Reservation is Updated successfully !'));
    }).catch(err => {
        console.log(err);
      });

  });


  module.exports = router;