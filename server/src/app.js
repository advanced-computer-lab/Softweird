const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('../config/db');
const usersController = require('./Routes/usersController');
const flightsController = require('./Routes/flightsController');
const reservationsController = require('./Routes/reservationsController');

const app = express();
const port = process.env.PORT || 8082;
const Users = require('./Models/Users');

// Connect Database
connectDB();

app.get("/Home", (req, res) => {
    res.status(200).send("You have everything installed !");
  });
  app.get("/createUser", async(req, res) => {
    res.status(200).send("You have everything installed !");
    const obj1 = new Users({"Name": "dgfv", "Email": "rm", "Age": 21, "BornIn": "00",  "PhoneNumber": "lll", "Job": "student" });
    const obj2 = await obj1.save();
    console.log(obj1);
  });
  app.get("/find", async(req, res) => {
    const obj3 = await Users.find({Job:"student"});
    res.send(obj3);
  });

app.listen(port, () => console.log(`Server running on port ${port}`));