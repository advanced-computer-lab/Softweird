const express = require("express");
const mongoose = require('mongoose');

const MongoURI = 'mongodb+srv://Softweird:Softweird1234@cluster0.vfp8z.mongodb.net/Softweird?retryWrites=true&w=majority' ;

const app = express();
const port = process.env.PORT || "8000";
const chalk = require('chalk');
const cors = require('cors')
/*
const usersController = require('./Routes/usersController');
const flightsController = require('./Routes/flightController');
const reservationsController = require('./Routes/reservationController');
*/


const bp = require('body-parser');
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

mongoose.connect(MongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(result =>console.log(chalk.bold.cyan("MongoDB is now connected")) )
.catch(err => console.log(err));

app.use(cors())


app.listen(port, () => {
  console.log(chalk.bold.yellow(`Listening to requests on http://localhost:${port}`));
});
