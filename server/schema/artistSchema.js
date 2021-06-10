const mongoose = require ('mongoose')
const artistSchema = new mongoose.Schema({
  artistName: {
    type: String,
    required: true
  },
  songlist: {type: [String], default : []},
  img: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Artist',artistSchema)