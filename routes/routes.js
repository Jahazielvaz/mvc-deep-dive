const express = require('express');
const router = express.Router();
const models = require('../models/model.js');



router.get('/', function(req, res){
  res.render('index.ejs');
})

router.get('/create', function(req, res){
  res.render('create.ejs');
})

router.post('/create', function(req, res){
  models.create({
    name: req.body.name,
    last: req.body.last
  }).then(function(){
    // console.log(`This is the request that body ${req.body}`);
    res.redirect('/');
  })
})



module.exports = router;
