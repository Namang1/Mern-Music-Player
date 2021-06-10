const express = require('express')
const mongoose = require('mongoose');
const mainroutes = require('./routes/mainroutes')
const profileroutes = require('./routes/profileroutes')
const cors = require ('cors')
const dotenv = require ('dotenv')
const session = require('express-session')
const passport = require('passport');
const flash = require('connect-flash');
dotenv.config()

const app = express()
const port = 3763

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({
 extended: true
}))
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.set("trust proxy", 1);
app.use(
  session({
    secret: "secretcode1",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      maxAge: 1000 * 60 * 60 * 24 // One Week
    }
  }))
  app.use(flash());  


app.use(passport.initialize());
app.use(passport.session());
app.use(mainroutes)
app.use(profileroutes)


// ${process.env.START_MONGODB}${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}${process.env.END_MONGODB}
try {mongoose.connect(`mongodb+srv://armaan:key2948@cluster0.giwib.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true},()=>{console.log(`Connected to the DATABASE`)});}
catch(error){console.log(`Could not connect to the DB because ${error}`)}


app.listen(port, () => {
  console.log(`App Running on port ${port}.`)
})