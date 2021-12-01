var express = require('express');
var router = express.Router();
const Reservation = require('../Models/Reservation');

const chalk = require('chalk');

  //Get all reservations
  router.get('/get-all-reservations', (req, res) => {
  
  Reservation.find()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.log(err);
    });
  });

// creating new Reservation
router.post('/create-reservation', (req, res) => {
  console.log("reservation creation");
  console.log(req.body);
  const newReservation = new Reservation(req.body);

  newReservation.save()
    .then(result => {
      res.status(200).send(result);
      console.log(chalk.bold.green("The Reservation is created successfully !"));
    })
    .catch(err => {
      console.log(err);
    });
});

   //Updating an existing Reservation
   router.put('/update-Reservation/:id', (req,res)=>{
    var id=req.params.id;
    Reservation.findByIdAndUpdate({id:_id}, req.body).then(result =>{

        res.status(200).send("Reservation updated ");
        console.log(chalk.bold.blue('The Reservation is Updated successfully !'));
    }).catch(err => {
        console.log(err);
      });

  });


  module.exports = router;
