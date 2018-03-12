
var express = require('express');
var app = express();
var bodyParser= require('body-parser');
var cors= require('cors');
var mongoose = require('mongoose');
var Big = require('node-bing-api')({accKey: ' '});

app.use(bodyParser.json());
app.use(cors());


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
