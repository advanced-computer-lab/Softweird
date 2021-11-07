const express = require("express");
const mongoose = require('mongoose');


const {MongoURI} = require('../src/config/db');
const app = express();
const port = process.env.PORT || "8000";
const chalk = require('chalk');
const cors = require('cors')

const usersController = require('./Routes/usersController');
const flightController = require('./Routes/flightController');
const reservationController = require('./Routes/reservationController');
const adminController = require('./Routes/adminController');



const bp = require('body-parser');
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

mongoose.connect(MongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(result =>console.log(chalk.bold.cyan("MongoDB is now connected")) )
.catch(err => console.log(err));

app.use(cors())

app.use('/user' , usersController);
app.use('/admin' , adminController);
app.use('/flight' , flightController);
app.use('/reservation' , reservationController);




app.listen(port, () => {
  console.log(chalk.bold.yellow(`Listening to requests on http://localhost:${port}`));
});
