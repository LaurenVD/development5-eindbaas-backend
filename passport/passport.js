const passport = require('passport');
const User = require('../models/User');

passport.use(User.createStrategy());

// serialize user data to store in session
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());