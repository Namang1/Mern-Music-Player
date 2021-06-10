const mongoose = require ('mongoose')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: false
},
googleaccount: {
  isgoogle : {type : Boolean, default: 0},
  googlename : String
},
img: {
     type: String,
     required: true,
     default: "https://iconape.com/wp-content/png_logo_vector/doraemon-logo.png"
},
likedby : {
  type : [String]
},
date: { type: Date, default: Date.now },
isAdmin: {type : Boolean, default : 0},
});
module.exports = mongoose.model('User',userSchema)