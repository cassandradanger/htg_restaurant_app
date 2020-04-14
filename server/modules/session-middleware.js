const cookieSession = require('cookie-session');

module.exports = cookieSession({
  secret: process.env.SERVER_SESSION_SECRET || 'secret', 
  key: 'user',
  resave: 'false',
  saveUninitialized: false,
  maxAge: 60 * 60 * 1000, 
  secure: false
});
