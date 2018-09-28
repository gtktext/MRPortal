const passport = require('passport');


//app is passed by calling this function from the main index file.
module.exports = (app)=>{

	app.get('/auth/google', passport.authenticate('google', {
			scope:['profile','email']	
		})
	);

	app.get('/auth/google/callback',(req, res)=>{
		passport.authenticate('google',req, res);
		 res.send({user: req.user})


	})


	

	app.get('/api/logout',(req, res)=>{
		req.logout();
		res.send('user is ' +req.user)
	})

	app.get('/api/current_user', (req, res)=>{

		// res.send(req.session)
		res.send(req.user);
	});



}

