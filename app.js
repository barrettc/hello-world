var express = require('express.io');

var app = express();
app.http().io();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.use(express.bodyParser());
});


app.get('/', function(req, res){
  res.send('Hello world - GET');
});

// {"foo":"bar"}
app.put('/', function(req, res){
  res.send('Hello world - PUT: ' + req.body.foo);
});

// {"foo":"bar"}
app.post('/', function(req, res){
  res.send('Hello world - POST: ' + req.body.foo);
});

// {"foo":"bar"}
app.delete('/', function(req, res){
  res.send('Hello world - DELETE: ' + req.body.foo);
});

app.listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});