var express = require('express')
var router = express.Router()
const mongoose = require('mongoose');
const User = require('../schema/userSchema')
const Artist = require('../schema/artistSchema')
const Song = require('../schema/songSchema')
const Pun_artist = require('../schema/pun_artist')
const Pun_song = require('../schema/pun_song')
const Playlist = require('../schema/playlist')
const Hinsong = require('../schema/hinsong')
const Hinartist = require('../schema/hinartist')
const Genre = require('../schema/genre')

const checkauthenticated = (req,res,next) => {
    if(req.user)
        return next()
    res.redirect('http://localhost:3000/login')
}
const checknotauthenticated = (req,res,next) => {
    if (!req.user)
    {
        return next()
    }
    res.redirect('http://localhost:3000/login')
}

router.get('/getartists', (req,res)=>{
        Artist.find().then((artists)=>{
        res.send(artists)
        }).catch((err)=>console.log(err))
})
router.get('/getpunartists', (req,res)=>{
    // const artists_punSchema = new mongoose.Schema({}, { strict: false })
    // const artists_pun = mongoose.model('artists_pun', artists_punSchema)
    Pun_artist.find().then((punartists)=>{
    res.send(punartists)
    }).catch((err)=>console.log(err))
})
router.get('/getplaylists', (req,res)=>{
    Playlist.find().then((artists)=>{
    res.send(artists)
    }).catch((err)=>console.log(err))
})
router.get('/gethinartists', (req,res)=>{
    Hinartist.find().then((artists)=>{
    res.send(artists)
    }).catch((err)=>console.log(err))
})
router.get('/getgenartists', (req,res)=>{
    Genre.find().then((artists)=>{
    res.send(artists)
    }).catch((err)=>console.log(err))
})
router.get('/getsongs', (req,res)=>{
    Song.find().then((songs)=>{
    res.send(songs)
    }).catch((err)=>console.log(err))
})
router.post('/getartistsongs', (req,res)=>{
    Song.find({'_id': {$in: req.body.ids}})
    .then(result => {res.send(result)})
    .catch(err => {console.log(err)})  
})
router.post('/getpunartistsongs', (req,res)=>{
    Pun_song.find({'_id': {$in: req.body.ids}})
    .then(result => {res.send(result)})
    .catch(err => {console.log(err)})  
})
router.post('/getplaylistsongs', (req,res)=>{
    Song.find({'_id': {$in: req.body.ids}})
    .then(result => {res.send(result)})
    .catch(err => {console.log(err)})  
})
router.post('/gethinsongs', (req,res)=>{
    Hinsong.find({'_id': {$in: req.body.ids}})
    .then(result => {res.send(result)})
    .catch(err => {console.log(err)})  
})
router.post('/getgensongs', (req,res)=>{
    Song.find({'_id': {$in: req.body.ids}})
    .then(result => {res.send(result)})
    .catch(err => {console.log(err)})  
})
router.post('/like', (req,res)=>{
    Song.updateOne({'_id': req.body.sid},{ $addToSet: { "likedby": req.body.uid } })
    .then(result => {console.log(result, " sfsf", result, "  If includes  ",req.body.uid, " If user includes ")
    })
    .catch(err => {console.log(err)})  
})
router.post('/likeuser',(req,res)=>{
    console.log(req.body.sid, req.body.uid)
    User.updateOne({'_id': req.body.uid},{ $addToSet: { "likedby": [req.body.sid] } })
    .then(result => {console.log("user also updated")})
    .catch(err => {console.log(err)})
})
router.post('/removelike', (req,res)=>{
    Song.updateOne({'_id': req.body.sid},{ $pull: { "likedby": req.body.uid} })
    .then(result => {console.log(result, " sfsf", result, "  If includes  ",req.body.uid, " If user includes ")
    })
    .catch(err => {console.log(err)})
})
router.post('/removelikeuser', (req,res)=>{
    User.updateOne({'_id': req.body.uid},{ $pull: { "likedby": req.body.sid } })
    .then(result => {console.log("user also updated"); res.send("DisLiked song ", req.body.sid , " by ", req.user._id)})
    .catch(err => {console.log(err)})
})
router.post('/likedmusic', (req,res)=>{
    Song.find({'_id': {$in: req.body.ids}})
    .then(result => {console.log(result); res.send(result)})
    .catch(err => {console.log(err)})  
})
// router.post('/getsongsbylang', (req,res)=>{
//     Song.find({'_id': {$in: req.body.ids}})
//     .then(result => {res.send(result)})
//     .catch(err => {console.log(err)})  
// })

module.exports = router