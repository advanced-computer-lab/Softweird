var express = require('express');
var router = express.Router();
const Reservation = require('../Models/Reservation');

const chalk = require('chalk');

//Get all entered Reservations
router.get('/get-all-reservations', (req, res) => {
  
  Reservation.find()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.log(err);
    });
});

//Get a certain entered Reservation with a known attribute
/*router.get('/get-all-reservations/:FlightNumber', (req, res) => {
    Reservation.find({FlightNumber:req.params.FlightNumber})
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
    Reservation.find(req.body)
      .then(result => {
        res.send(result);
      })
      .catch(err => {
        console.log(err);
      });
  });
  
  // creating new Reservation
  router.post('/create-Reservation', (req, res) => {
    console.log("@@@@@@@@@@@@@@@@@@");
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
  router.patch('/update-Reservation/:id', (req,res)=>{
    Reservation.updateMany({FlightNumber: req.params.id}, req.body).then(result =>{

        res.status(200).send("Reservation updated ");
        console.log(chalk.bold.blue('The Reservation is Updated successfully !'));
    }).catch(err => {
        console.log(err);
      });

  });

  //Deleting an existing Reservation
  router.delete('/delete-Reservation/:FlightNumber', (req,res)=>{
    console.log("nnnnn");
    Reservation.deleteMany(req.params.id, req.body).then(result =>{

        res.status(200).send("Reservation Deleted ");
        console.log(chalk.bold.red("The Reservation is deleted successfully !"));
    }).catch(err => {
        console.log(err);
      });

  });

  module.exports = router;
