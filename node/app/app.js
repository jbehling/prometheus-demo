var express = require('express');
var faker = require('faker');
var app = express();
var client = require('prom-client');
var register = client.register;


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

