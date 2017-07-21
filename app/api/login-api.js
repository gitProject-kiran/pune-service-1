//grab the nerd moel we just created
var userSignup = require('../models/signup-schema');

function login(app){

	app.get('/api/login', function(req, res){
		console.log('login-api',req.query);
		userSignup.find({"mobileNumber": req.query.mobileNumber,"password": req.query.password}, function (err, data) {  
			  if (err) {
			  	
			        res.sendStatus(0);
			        return;
			    } else {
			    	console.log('login-api==>', data);	
				    if(data.length > 0){
				    	res.sendStatus(1);
				    	return;	
				    }else{
						  res.sendStatus(0);
						  return;
				    	}	
			        }
			});
	});
		
};
module.exports = login;