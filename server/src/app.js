const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('../config/db');
const usersController = require('./Routes/usersController');
const flightsController = require('./Routes/flightsController');
const reservationController = require('./Routes/reservationController');
const adminController = require('./Routes/adminController');

const app = express();
const port = process.env.PORT || 8082;
const chalk = require('chalk');
const cors = require('cors')
const bp = require('body-parser');
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

// Connect Database
connectDB();

app.use(cors())

app.get("/Home", (req, res) => {
    res.status(200).send("You have everything installed !");
  });
 
  app.use('/user', usersController);
  app.use('/admin', adminController);
  app.use('/flight', flightsController);
  app.use('/reservation', reservationController);

  app.listen(port, () => {
    console.log(chalk.bold.yellow(`Listening to requests on http://localhost:${port}`));
  });
