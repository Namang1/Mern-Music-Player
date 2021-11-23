var express = require('express')
var router = express.Router()
const User = require('../schema/userSchema')
const date = require('date-and-time');
const random = require('random')
const {mail,otpmail} = require('../addons/mail')
const passport = require('passport');
var flash = require('connect-flash');
const passportsetup = require('../addons/passport-setup')


router.post('/register', function (req, res) {
    const user = new User({
      username: req.body.username,
      password: req.body.pass,
      email: req.body.email,
  })
  try{
    User.findOne({username:req.body.username}).then((currentUser)=>{
      if(currentUser){
         res.send({message:"Username Already Exists! Login Instead" , code:2})
        //res.redirect('http://localhost:3000?errcode=2')
      }
      else{
        User.findOne({email:req.body.email}).then((currentUser)=>{
          if(currentUser){
            res.send({message:"Email Already Exists! Login Instead" , code:1})
            //res.redirect('http://localhost:3000?errcode=1')
          }
          else{
            const a1 = user.save().then((newUser)=>{})
            mail (req.body.email, req.body.username)
             res.send({message: "New User Created! Login Now" , code:3})
            //res.redirect('http://localhost:3000?errcode=3')
          }
      })
    }})
  }catch(err){
      console.log(err);
  }
  })

  //route control unit


  router.get('/auth/google', passport.authenticate('google',{scope : ['profile', 'email']}))
  router.get('/auth/google/redirect', 
  passport.authenticate('google', { failureRedirect: 'http://localhost:3000/login' }),
  function(req, res) {
    res.redirect('http://localhost:3000/home')
  });


  router.post('/login', (req,res,next) =>{
  passport.authenticate('local', (err,user,info) => {
    console.log("BACK IN /login route user ", user)
    if(err) throw err
    if(!user) {
      res.send(info)
    }
    else{
      let otp = (random.int((min = 123456), (max = 987654))+"")
      otpmail(user.email, user.username, otp)
      // req.logIn(user, err=>{
      //           if (err) throw err;
      //           console.log(user) })
      //  res.send({email: user.email, code: 3, otp:otp})
    }
  })(req, res, next)
})

// function validateotp(req, user){
//   console.log('INSIDE VALIDATE OTP NOW. USER IS', user, " REQ>USER is ", req)
//    router.post('/verifyotp' ,(req,res) =>{
//     console.log('INSIDE Verify OTP NOW. USER IS', user, " REQ>USER is ", req)
//      var otp = req.flash("otp")[0]
//      console.log(otp)
//     console.log("Verify OTP", otp, req.body.otp)
//     if(req.body.otp === otp){
//       console.log("Verify OTP99")
//           req.logIn(user, err=>{
//             console.log("Verify OT999")
//         if (err) throw err;
//         console.log(user) })
//         res.send({code:2})
//     }
//     else{
//       console.log("Verify OTP5555")
//       res.send({code:1})
//     }
//   })
// }

  router.get('/getuser',  (req,res) =>{
    console.log("hello3")
    res.send(req.user)
  })

  router.delete('/logout', function(req, res){
    if (req.isAuthenticated()) {
      req.session.destroy(function() {
        res.send('LOGGED OUT')
    });
    }
  })

  

  
  module.exports = router






      // res.redirect('http://localhost:3000/login');

    // const now = new Date();
    // formdate =date.format(now, 'YYYY/MM/DD'); 



      //router.get('/', function (req, res) {res.send("<h1>HELLO</h1>")})
  // router.get('/auth/google', function(req,res){
  //   console.log("YO")
  //   res.send("YO")
  // })