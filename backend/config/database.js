const {Client} = require("pg");
const DB_URL = "postgres://arqiwslrdkpcbi:334c88202e75f0145dd7dc7e52665c81510d62e44b1cabef0f0627e77d914f82@ec2-34-227-135-211.compute-1.amazonaws.com:5432/d3rei0ei7valo4"
//const client = new Client(process.env.DB_URL);
const connectionString = DB_URL
 const client = new Client({
     connectionString: connectionString,
     ssl:{
         rejectUnauthorized: false //allows external access to database when using nodejs
     }
 });

module.exports = client;
