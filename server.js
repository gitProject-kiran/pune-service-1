//modules ==========================
var express   	   = require('express');
var app			   = express();
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var mongoose 	   = require('mongoose');

//configuration ================================

//config files
var db = require('./config/db');

//set our port
var port = process.env.PORT || 8080;

//connect to our mongoDB database
mongoose.connect(db.url);

//get all data/stuff of the body (POST) parameters
//parse application/json
app.use(bodyParser.json());

//parse application/vnd.api+json as json
app.use(bodyParser.json({type:'application/vnd.api+json'}));

//parse application/x-www-form-urlencoded
app.use(methodOverride('X-HTTP-Method-Override'));

//set the static files location
app.use(express.static(__dirname + '/public'));

//routes ========================================
var routes = require('./app/routes.js');
routes(app); //configure our routtes

//start app ====================================
app.listen(port);

//shoutout to the user
console.log('Magic Happen on port' + port);

//expose app
exports = module.exports = app;


