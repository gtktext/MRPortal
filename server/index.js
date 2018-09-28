const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys')

require('./models/User')
require('./services/passport');

mongoose.connect(keys.mongoURI)
//express
const app = express();

//cookie stuff (middleware)
//cookiesession
app.use(
	cookieSession({
		maxAge: 30*24*60*60*1000,
		keys: [keys.cookieKey]
	})
);
app.use(passport.initialize());
app.use(passport.session());






require('./routes/authRoutes')(app); 

//we pass app into the outhroutes since authRoutes needs app to work (app.get)















//route handlers
	//test route
// app.get('/', (req, res)=>{
// 	res.send({hi: 'there'});
// })
//PORT is recieved from process.env.PORT which is given by the server (if that service exists)
const PORT = process.env.PORT || 5000;
app.listen(5000);