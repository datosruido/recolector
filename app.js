const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(morgan('tiny'))
app.use(cors());

// Endpoints
app.get("/", (req, res) => res.send("Hello world!"));
app.use('/api/v1/register', require('./endpoints/register'));
app.use('/api/v1/auth', require('./endpoints/auth'));
app.use('/api/v1/gatherer', require('./endpoints/gatherer'));
app.get("/healthcheck", (req, res) => res.send({ status: "OK" }));
app.get("/version", (req, res) => res.send({ version: "1.0.0" }));

module.exports = app;