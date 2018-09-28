//passport
const passport = require('passport');
const GoogleStrategy = require ('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
//keys
const keys = require('../config/keys');

const User = mongoose.model('users')

passport.serializeUser((user, done)=>{

	done(null, user.id)

})
passport.deserializeUser((id, done)=>{
	User.findById(id)
		.then((user)=>{
			done(null, user)
		})
})


//passport

passport.use(new GoogleStrategy({
	clientID: keys.googleClientID,
	clientSecret: keys.googleClientSecret,
	callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile,req, res, done )=>{

	console.log('The accessToken',accessToken);
	// console.log('the refresh token', refreshToken);
	// console.log('the profile', profile)

	User.findOne({googleId: profile.id})
		.then((existingUser)=>{
			if(existingUser){
				thisUser = existingUser
				console.log('existing User')
				res.send({user: 'DOES exists'})

				done(null, existingUser)


			}else{
				console.log('NON existant user')
				new User({googleId: profile.id}).save()
				.then(user=> {
				res.send({user: 'DOES NOT exist'})

					done(null, user)
				})

			}
		})


}));


