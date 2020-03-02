const express = require('express');
const bodyParser = require('body-parser');
const server = express();
const v1Router = require('./router/v1');

// Server setup
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.use('/', v1Router);

module.exports = server;
