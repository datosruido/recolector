const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const app = express();

// Middlewares
app.use(helmet.contentSecurityPolicy());
app.use(helmet.dnsPrefetchControl());
app.use(helmet.expectCt());
app.use(helmet.frameguard());
app.use(helmet.hidePoweredBy());
app.use(helmet.hsts());
app.use(helmet.ieNoOpen());
app.use(helmet.noSniff());
app.use(helmet.permittedCrossDomainPolicies());
app.use(helmet.referrerPolicy());
app.use(helmet.xssFilter());
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