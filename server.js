
var express = require('express');
var app = express();
var bodyParser= require('body-parser');
var cors= require('cors');
var mongoose = require('mongoose');
var Big = require('node-bing-api')({accKey: ' 5dd324c7c56247f8afaa711de888b14c'});

app.use(bodyParser.json());
app.use(cors());

app.get('/api/imagesearch/: searchVal*' , (res,req,next) =>{
var {searchVal} = req.params;
  var {offset} = req.query;
  
  return res.json({
  searchVal,
  offset
  });
});


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
