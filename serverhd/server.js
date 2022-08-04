var express = require('express');
var app = express();
var bodyParser = require('body-parser')

const port = 5000;
const mysql = require('mysql');

app.use(express.json()); 
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.urlencoded());
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
next();
});
  
const connectsql = mysql.createConnection(
  {
    host:'localhost',
    user:'phim24h',
    password:'phim24h',
    database:'phim24h'
  }
);
connectsql.connect(err =>{
  if(err)
  {
    return err;
  }
});

require("./GetTheLoai")(app,connectsql)
require("./GetCountry")(app,connectsql)
require("./GetIntro")(app,connectsql)
require("./GetIntroLink")(app,connectsql)
app.listen(port, () => console.log(`Listening on port ${port}`));