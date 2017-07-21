//grab the nerd moel we just created
var pincodeSchema = require('../models/pincode-schema');

function pincoderote(app){

	app.get('/api/pincode', function(req, res){
		//use mongoose to get all nerds in the database
		pincodeSchema.find(function(err, pincodes){
			if(err){
				res.send(err);
				return;
			}
			res.json(pincodes);
		});
	});

	app.post('/api/save-pincode', function(req, res){

		var pincodeData = new pincodeSchema({
			location: req.body.location,
    		pincode: req.body.pincode,
    		state: req.body.state,
    		district: req.body.district
		});	
		
		pincodeSchema.find({"pincode": req.body.pincode}, function (err, data) {  
			  if (err) {
			        res.send(err);
			        return;
			    } else {
				    //check above field already register or not
				    if(data.length > 0){
				    	res.send('pincode already register');
				    	return;	
				    }else{
						    pincodeData.save(function(error){
								if(error){
									console.log('pincode may be already register');
									return;
								}
								res.send('pincode register successfully');
							})
				    	}	
			        }
			});
	});
};
module.exports = pincoderote;