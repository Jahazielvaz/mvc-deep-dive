const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();
const path = require('path');
const urlEncoded = bodyParser.urlencoded({extended: false});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "views"));
app.use(urlEncoded);


const routes = require('./routes/routes.js');

app.use('/', routes);
// app.use(function(err, req, res, next){
//   res.status(err.status || 500);
// })

module.exports = app;
