const express = require('express');
const server = express();
const songsController = require('./controllers/songs');
const v1Router = require('./router/v1');

server.use('/', v1Router);

module.exports = server;
