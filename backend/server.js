// We can add the modules we imported from NPM using require
const express = require("express");

const cors = require('cors');

//connecting database with backend
const db = require("../Backend/App/config/database");
db.connect((error) => {
  if (error) {
    console.log("show error");
  } else {
    console.log("no error");
  }
});
const route = require('./App/routes/routes');

// Calling express as a function we create a basic web server
const app = express();

// This is the port where we will run our web server
const port = process.env.PORT || 4301;

app.use('/',route);


app.get("/", (req, res) => res.send("Hello World!"));

// We make our webserver listen to an specific PORT
app.listen(port, () =>
  console.log(`app listening at http://localhost:${port}`)
);
