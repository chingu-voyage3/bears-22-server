// Imports
const passport = require('passport')
const githubStrategy = require('passport-github2')
const user = require('../model/user')
const keys = require('./keys')

//Serialize user -> user object to unique user ID(Stored in cookie)
passport.serializeUser((user, done) => {
  done(null, user.id)
})

//Deserialize user -> unique user ID(from cookie) to user object
passport.deserializeUser((id, done) => {
  user.findUserByID(id, function(user) {
    done(null, user)
  })
  //TODO: If user not found?
})

// Set up Github Authentication
githubOptions = {
  clientID: keys.github.clientID,
  clientSecret: keys.github.clientSecret,
  callbackURL: keys.github.callbackURL
}

githubCB = (accessToken, refreshToken, profile, done) => {
  console.log('Authenticated! Reached the callback')
  console.log(profile)
  user_github_email = profile._json.email
  console.log('User email: ' + user_github_email)

  //Check if user is a chingu member
  user.findUserByGithubEmail(user_github_email, function(current_user) {
    if (current_user) {
      console.log('User exists: ' + current_user)
      console.log(JSON.stringify(current_user))
      done(null, current_user)
    } else {
      console.log('Not a chingu member')
      var err = 'Not a chingu member'
      done(err)
    }
  })
}

//TODO: Handle rejected promises
passport.use(new githubStrategy(githubOptions, githubCB))
