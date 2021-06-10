const mongoose = require ('mongoose')
const pun_songSchema = new mongoose.Schema({
  songName: {
    type: String,
    required: true
  },
  artistName: {
    type: String,
    required: true
  },
  likedby: {type: [String], default : []},
  song: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  lang: {
      type: String,
      required: true
  }
});

module.exports = mongoose.model('pun_song',pun_songSchema)