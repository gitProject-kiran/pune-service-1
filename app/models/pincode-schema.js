//grab the mongoose module
var mongoose = require('mongoose');

//module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('pincodes',{
	location 	  : {type : String, default:''},
	pincode 	  : {type : Number, default:''},
	state   	  : {type : String, default:''},
	district      : {type : String, default:''}
});
