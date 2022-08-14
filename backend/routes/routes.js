const express = require("express");
const bodyParser = require("body-Parser");
const cors = require('cors')

const app = express();

// const db = require("../controllers/crud"); //requiring the controllers
const add = require('../controllers/addStudent');
const del = require('../controllers/deleteStudent');
const get = require('../controllers/getStudent') ;
const getAll = require('../controllers/getAllStudent');
const update = require('../controllers/updateStudent');


app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
//

//Endpoints routes and path binding to url
app.get("/student", getAll.getAllStudent);
app.get("/student/:id", get.getStudentById);
app.post("/student", add.addStudent);
app.put("/student/:id", update.updateStudent);
app.delete("/student/:id",del.deleteStudent);

module.exports = app;
