var express = require('express');
var faker = require('faker');
var app = express();
var client = require('prom-client');
var register = client.register;
var morgan = require('morgan');
const json = require('morgan-json');
var bunyan = require('bunyan');
var bunyanRequest = require('bunyan-request');
var app = express();
var logger = bunyan.createLogger({name: 'My App'});
var requestLogger = bunyanRequest({
      logger: logger,
      headerName: 'x-request-id'
});

app.use(requestLogger);

app.get('/metrics', function(req, res) {
    res.end(register.metrics());
});

app.get('/', function ( req, res ) {
    res.json({ message: "Hello World" })
});

app.get('/name', function ( req,res ) {
    var name = faker.name.findName();
    res.json({ name: name });
});

app.listen(8080, function() {
    console.log('Example app listening on port 8080')
});

