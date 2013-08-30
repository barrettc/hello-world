var express = require('express.io');

var app = express();
app.http().io();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.use(express.bodyParser());
});

var routeConfig = require("./routes.js");
routeConfig(app);

app.listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});