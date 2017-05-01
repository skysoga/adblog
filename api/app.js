var express = require('express');
var cors = require('cors');//跨域
var bodyParser = require('body-parser');

var app = express();

app.use(cors({
	origin: ['http://localhost:8080'],
	methods: ['GET','POST','PUT'],
	alloweHeaders: ['Conten-Type', 'Authorization']
}));

////body-parser设置
//app.use( bodyParser.urlencoded( {extended: true} ));
//app.use( bodyParser.text({ type: 'text/html' } ));

//模块划分app.use()
//app.use('/admin', require('./router/admin'));
//app.use('/api', require('./router/api'));
app.use('/', require('./router/main'));

app.listen(3000)

