const mongoose = require ('mongoose')
const pun_artistSchema = new mongoose.Schema({
  artistName: {
    type: String,
    required: true
  },
  songlist: {type: [String], default : []},
  img: {
    type: String,
    required: true
  },
  sudoArtist: {
      type: String
  }
});

module.exports = mongoose.model('pun_artist',pun_artistSchema)