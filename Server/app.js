var express = require('express');
var app = require('express')();
var path = require('path');

var rootPath = path.join(__dirname, '..');

var viewPath = path.join(rootPath, 'View');
app.use(express.static(viewPath));

var nodeModulesPath = path.join(rootPath, 'node_modules');
app.use(express.static(nodeModulesPath));

app.use(require('./middleware/logging.middleware'));

app.use(require('./middleware/request-state.middleware'));

app.use('/api', require('./api/api.router'));

var port = 8080;
app.listen(port, function () {
	console.log('Server awaiting orders on port', port, 'ma\'am/sir');
});

module.exports = app;