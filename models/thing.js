var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/*
 * Example of a schema definition:

var userSchema = new mongoose.Schema({
	username: String,
	password: String, //hash created from password
	created_at: {type: Date, default: Date.now}
});

mongoose.model('Thing', userSchema); // this will create a 'users' collection @ process.env.DB_NAME if it does not exists
*/