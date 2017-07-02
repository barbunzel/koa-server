const koa = require('koa');
const logger = require('koa-logger');
const mongo = require('koa-mongo');
const bodyParser = require('koa-bodyparser');
const mount = require('koa-mount');
const app = koa();

const config = require('./config/config');

const api = require('./routes/api');

// logger
app.use(logger());
app.use(mongo(config.db));
app.use(bodyParser());
app.use(mount('/api', api));

module.exports = app;