const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();
const urlEncoded = bodyParser.urlencoded({extended: false});
