const express = require('./node_modules/express');
const helmet = require('./node_modules/helmet');

const carsRouter = require('../cars/cars-router.js.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/cars', carsRouter);

module.exports = server;
