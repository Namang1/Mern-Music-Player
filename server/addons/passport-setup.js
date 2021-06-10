const passport = require('passport');
const googleStrategy = require('passport-google-oauth20')
const LocalStrategy = require('passport-local')
const keys = require('./keys')
const User = require('../schema/userSchema')

passport.serializeUser((user, done) => {
  console.log("SERIALISING", user.id, user._id)
    done(null, user._id);
  });
  
  passport.deserializeUser((id, done) => {
    console.log("DESERIALISING", id)
    User.findById(id, function(err, user) {
      done(err, user);
  });
  })

passport.use(new googleStrategy({
     //something passport
     callbackURL: 'http://localhost:3763/auth/google/redirect',
     clientID : keys.google.clientID,
     clientSecret : keys.google.clientSecret}
,
function(token, tokenSecret, profile, done) {
  console.log(profile)
User.findOne({username:profile.id}).then((currentUser)=>{
  if(currentUser){
     console.log("User Already In DB" , currentUser)
     done(null, currentUser)
  }
  else{
    new User({
      username: profile.id,
      email : profile._json.email,
      googleaccount : {isgoogle : 1, googlename : profile._json.name},
      img : profile._json.picture
    }).save().then((newUser)=>{console.log("NEW USER CREATED", newUser); done(null, newUser)})
  }
})
}
));


passport.use(new LocalStrategy(
  function(username, password, done) {
    console.log("INSDE LOCAL Curr")
    User.findOne({ username: username }, function(err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, {message : "No User Found", code:1});
      }
      if (!(user.password == password)) {
        return done(null, false , {message : "Incorrect Password", code:2});
      }
      console.log(" user ", user);
      done(null, user);
    });
  }
));