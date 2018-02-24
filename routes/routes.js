const express = require('express');
const router = express.Router();
const models = require('../models');


router.get('/', function(req, res){
  res.render('index.ejs')
})

router.post('/create', function(req, res){
  models.model.create({
    name: req.body.name,
    last: req.body.last
  }).then(function(){
    res.redirect('/');
  })
})
