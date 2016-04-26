var express = require('express'),
		app     = express(),
		root = 'build/';

app
	.use(express.static(root))
	.get('/', function(req, res) {
		res.sendFile(__dirname + '/build/index.html');
	})
	.get('/components', function (req, res){
		res.sendFile(__dirname + '/build/views/components.html');
	})
	.listen(1337, function(){
		console.log('listening on port 1337');
	});

