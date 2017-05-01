var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/', function(req, res, next) {
  //res.send('index-User');
  res.json({name:'aaa',pwd:'123'});
})

router.post('/', function(req, res, next) {
	console.log(req.body);
	res.json({name:'aaa',pwd:'123'});
})

router.get('/json', function(req, res, next) {
  //res.send('index-User');
  var  data = JSON.parse(fs.readFileSync('json.json'))
  console.log(data)
  res.json(data)
})
module.exports = router;
