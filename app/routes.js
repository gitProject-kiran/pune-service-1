//grab the nerd moel we just created
var userSignupApi = require('./api/signup-api');
var pincodeApi = require('./api/pincode-api');
var loginApi = require('./api/login-api');

var userSchema = require('./models/signup-schema');

function routes(app){
	//server routes
	//handle things like api calls
	//authentication routes

	//sample api route
	app.post('/api/signup', function(req, res){
		//use mongoose to get all nerds in the database
		userSignupApi(req, res)
	});

	//login verify
	loginApi(app);

	//pin-code GET API and SET API
	pincodeApi(app);

	//sample api route
	app.get('/api/nerds', function(req, res){
		//use mongoose to get all nerds in the database
		userSchema.find(function(err, nerds){
			if(err){
				res.send(err);
				return;
			}
			res.json(nerds);
		});
	});

	// route to handle creating goes here (app.post)
    // route to handle delete goes here (app.delete)

    // frontend routes =========================================================
    // route to handle all angular requests
};

module.exports = routes;