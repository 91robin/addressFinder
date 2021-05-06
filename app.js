'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 8080;
process.env.ENV = process.env.ENV || 'local';

app.use(bodyParser.json({}));
app.use(bodyParser.urlencoded({}));

const RouteURLs = require('./route');
require('./cron/scheduledTasks');

//Below function call will define all HTTP Routes for current http node server
RouteURLs(app);

app.listen(port, function () {
    console.log("Address Finder service is running on port " + port);
});

module.exports = app;