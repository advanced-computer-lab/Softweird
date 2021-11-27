var express = require('express');
var router = express.Router();
const Flight = require('../Models/Flight');

const chalk = require('chalk');

//Get all entered Flights
router.get('/get-all-flights', (req, res) => {
  
  Flight.find()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.log(err);
    });
});

//Get a certain entered Flight with a known attribute
/*router.get('/get-all-flights/:FlightNumber', (req, res) => {
    Flight.find({FlightNumber:req.params.FlightNumber})
      .then(result => {
        res.send(result);
      })
      .catch(err => {
        console.log(err);
      });
  });
*/
  //search
  router.get('/search', (req, res) => {
    Flight.find(req.body)
      .then(result => {
        res.send(result);
      })
      .catch(err => {
        console.log(err);
      });
  });
  // creating new Flight
  router.post('/create-Flight', (req, res) => {
    console.log("@@@@@@@@@@@@@@@@@@");
    console.log(req.body);
    const newFlight = new Flight(req.body);
  
    newFlight.save()
      .then(result => {
        res.status(200).send(result);
        console.log(chalk.bold.green("The Flight is created successfully !"));
      })
      .catch(err => {
        console.log(err);
      });
  });

  //Updating an existing Flight
  router.put('/update-Flight/:id', (req,res)=>{
    var id=req.params.id;
    Flight.findByIdAndUpdate({id:_id}, req.body).then(result =>{

        res.status(200).send("flight updated ");
        console.log(chalk.bold.blue('The Flight is Updated successfully !'));
    }).catch(err => {
        console.log(err);
      });

  });

  //Deleting an existing Flight
  router.delete('/delete-Flight/:FlightNumber', (req,res)=>{
    console.log("nnnnn");
    Flight.findByIdAndRemove(req.params.id, req.body).then(result =>{

        res.status(200).send("Flight Deleted ");
        console.log(chalk.bold.red("The Flight is deleted successfully !"));
    }).catch(err => {
        console.log(err);
      });

  });

  module.exports = router;
