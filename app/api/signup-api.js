//grab the nerd moel we just created
var userSignup = require('../models/signup-schema');

function signup(req, res){
		var user = new userSignup({
			email: req.body.email,
    		firstName: req.body.firstName,
    		lastName: req.body.lastName,
    		mobileNumber: req.body.mobileNumber,
    		password: req.body.password,
		});	

		userSignup.find({"mobileNumber": req.body.mobileNumber}, function (err, data) {  
			  if (err) {
			        res.send(err);
			        return;
			    } else {
				    //check above field already register or not
				    console.log('User may be already register',data.length);
				    if(data.length > 0){
				    	res.send('User already register');
				    	return;	
				    }else{
						    user.save(function(error){
								if(error){
									console.log('User may be already register');
									return;
								}
								res.send('User register successfully');
							})
				    	}	
			        }
			});
};
module.exports = signup;