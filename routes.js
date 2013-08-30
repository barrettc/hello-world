module.exports = function(app) {
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
}