const mongoose = require('mongoose');
const Schema = mongoose.Schema
//destructered version
// const { Schema } = mongoose;


const userSchema = new Schema({
	googleId: String
})


mongoose.model('users', userSchema);



