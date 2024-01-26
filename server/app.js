var express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.mongodb).then(() => {
  console.log('Database connection established');
}).catch((error) => {
  console.log(error);
  console.log('Error connecting to Mongo');
});

var employeeRouter = require('./api/Employee/Employee.route');
var usersRouter=require('./api/User/user.route.js');
var app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Access-Control-Allow-Headers', '*');

  next();
});

app.use(express.json());  
app.use('/employee', employeeRouter);
app.use('/users',usersRouter)

app.listen(3000, () => {
  console.log('listening on http://localhost:3000');
});
