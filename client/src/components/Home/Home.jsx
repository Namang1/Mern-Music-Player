import React,{useEffect,useState,useRef} from 'react';
import axios from 'axios';
import Player from './Player';
import './home.css' 
import Navbar from './navbar/Navbar'
import collections from './musiccollection'
import MusicList from "./musicList/MusicList"
import Queue from "./queue/Queue"
import Profile from './Profile'
import Cd from './Cd/Cd'
import Rightinfo from './Rightinfo/Rightinfo';

function Home({user}) {
  console.log("HOME RERENDERED")
  const [collection, setcollection] = useState(collections.coldplay_songs)

  // if(user==="") window.location = '/login'
  
  const [current_song, setCurrent_song] = useState(0)
  const [artistcollection, setArtistcollection] = useState("")
  const [listcollection, setlistcollection] = useState("")
  const [punartistcollection, setpunArtistcollection] = useState("")
  const [genartistcollection, setgenArtistcollection] = useState("")
  const [hinartistcollection, sethinArtistcollection] = useState("")
  const [songcollection, setSongcollection] = useState("")
  const [likecollection, setlikecollection] = useState("")
  const [mode, setmode] = useState("HOME")
  const audioRef = useRef()
  const [isPlaying, setIsPlaying] = useState(false)
  const [chn, setchn] = useState(false)
  //const [update, setupdate] = useState(false)

     
  useEffect(() => {
      console.log("AJAX")
     // axios.get('/getuser').then(response=>{setuser(response.data);}).catch(err=>console.log(err))
      axios.get('/getartists').then(response=>{setArtistcollection(response.data)}).catch(err=>console.log(err))
      axios.get('/getpunartists').then(response=>{setpunArtistcollection(response.data)}).catch(err=>console.log(err))
      axios.get('/gethinartists').then(response=>{sethinArtistcollection(response.data.reverse())}).catch(err=>console.log(err))
      axios.get('/getgenartists').then(response=>{setgenArtistcollection(response.data)}).catch(err=>console.log(err))
      axios.get('/getplaylists').then(response=>{setlistcollection(response.data)}).catch(err=>console.log(err))
      axios.get('/getsongs').then(response=>{setSongcollection(response.data)}).catch(err=>console.log(err))
      // axios.get('/getsongsbylang').then(response=>{setLangcollection(response.data)}).catch(err=>console.log(err))
      // console.log("HERE", document.getElementById('topinfoimage').src);
      //  document.getElementById('topinfoimage').src = `${process.env.PUBLIC_URL}/Mélodie/Images/Alan Walker _ Ava Max - Alone, Pt. II.jpg`;
    },[]) 

    // useEffect(() => {
    //   var likelist = []
    //   for (var i=0; i<songcollection.length; i++)
    //   {
    //     if(songcollection[i].likedby.includes(user._id)) {likelist.push(songcollection[i])}
    //   }
    //   setlikecollection(likelist)
    //   console.log(likecollection)
    // }, [songcollection])

    useEffect(() => {
      console.log(user.likedby)
      axios.post('/likedmusic', {'ids' : user.likedby}).then(response=>{console.log(response); setlikecollection(response.data)}).catch(err=>console.log(err))
    }, [user])


    useEffect(() => {
      console.log("CSCSC")
       intermediate() 
       console.log("CURRENT collection", collection)
    }, [collection])  
    const intermediate = ()=> {
      setchn(true)
    }
  // useEffect(() => {
  //   setCurrent_song(0)
  //   const audio = audioRef.current
  //   setTimeout(() => {
  //     audio.play()
  //   }, 1000);
  //   setIsPlaying(true)    
  // }, [collection])

  const handleLogout = () =>{
    console.log("REQUESTED LOGOUT")
    axios.delete('/logout').catch(err=> console.log(err))
    window.location.href = '/login';
  }
  const handleLogin = () =>{
    window.location.href = '/login';
  }    

    return (
      <div>
        { true &&
      <div className="container-fluid" style={{height:'100vh'}}>
        <div className="row topnav">
          <div>
            { user!==""? 
            <div style={{float:'right'}}> <button className="log" style={{float:'right'}} onClick={handleLogout}>LOG OUT</button> <p className="username" style={{float:'right'}}>{user? user.username: "LOGIN"}</p></div>:
            <button className="log" style={{float:'right'}} onClick={handleLogin}>LOG IN</button>
            }
          </div>
        </div>
        <div className="row cendiv">
          <div className="col-12" style={{paddingRight:'0'}}>
          <div className="main-content">
            <div className="container-fluid" style={{paddingLeft:'0'}}>
              { mode==="HOME" &&
              <div className="custom-black topinfotop w-100 d-flex justify-content-between align-items-center p-2 text-white mt-5 rounded-2">
                <div className="w-25 topinfotop">
                  <img className="w-100 topinfotop" id="topinfoimage" src={collection[current_song].img} alt="NOT AVAILABLE"></img>
                </div>
                <div className="d-flex topinfotop flex-column w-50 align-items-end pe-3 justify-content-around">
                  <p className="fs-3 topinfotop topinfotop1 m-0 p-0">{collection[current_song].songName}</p>
                  <p className="fs-5 topinfotop topinfotop2 m-0 p-0">{collection[current_song].artistName}</p>
                </div>                            
              </div>
              }
              {/* HERE */}
              {
                mode === "QUEUE" &&
                <div style={{}}>
                  <Queue title="QUEUE" collection={collection} disabled={false} user={user} current_song={current_song} setCurrent_song={setCurrent_song} audioRef={audioRef} setIsPlaying={setIsPlaying}></Queue>
                </div>
              }
              {
                mode === "LIKED" &&
                <div style={{}}>
                  <Queue title="LIKED MEDIA" collection={likecollection} disabled={true} user={user} current_song={current_song} setCurrent_song={setCurrent_song} audioRef={audioRef} setIsPlaying={setIsPlaying}></Queue>
                </div>
              }
              {
                mode === "PROFILE" && user!=="" &&
                <Profile user={user} likecollection = {likecollection.length}></Profile>
              }
              {
                mode === "SHARE" && 
                <div className="container dvdrow">
                  <div className="row" style={{height:'20vh'}}>                  
                  </div> 
                  <div className="row">
                    <div className="col-md-6">
                    <Cd isPlaying={isPlaying}></Cd>
                    </div>
                    <div className="col-md-6">
                      <Rightinfo isPlaying={isPlaying} currname={collection[current_song].songName} ></Rightinfo>
                    </div>                    
                  </div>                    
                </div>
              }
              {
                mode === "HOME" &&
              <div id="musiclistlist">
              <div className="row no-gutters">
                <div className = 'col-12'>
                     <MusicList listTitle={"Artists"} lang="ENGLISH" data={artistcollection}  setcollection={setcollection} current_song={current_song} setCurrent_song={setCurrent_song} audioRef={audioRef} isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>
                </div>
              </div>
              <div className="row no-gutters">
                <div className = 'col-12'>
                     <MusicList listTitle={"Genre"} lang="GENRE" data={genartistcollection} setcollection={setcollection}  current_song={current_song} setCurrent_song={setCurrent_song} audioRef={audioRef} isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>
                </div>
              </div>  
              <div className="row no-gutters" style={{marginBottom:'15%'}}>
                <div className = 'col-12'>
                     <MusicList listTitle={"Playlists"} lang="PLAYLIST" data={listcollection} setcollection={setcollection} current_song={current_song} setCurrent_song={setCurrent_song} audioRef={audioRef} isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>
                </div>
              </div>    
              </div>
              }
              {
                mode === "LANGUAGE" &&
              <div id="musiclistlist" style={{marginTop:'5%'}}>
              <div className="row no-gutters">
                <div className = 'col-12'>
                     <MusicList listTitle={"Hindi"} lang="HINDI" data={hinartistcollection}  setcollection={setcollection} current_song={current_song} setCurrent_song={setCurrent_song} audioRef={audioRef} isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>
                </div>
              </div>
              <div className="row no-gutters">
                <div className = 'col-12'>
                     <MusicList listTitle={"Punjabi"} lang="PUNJABI" data={punartistcollection} setcollection={setcollection}  current_song={current_song} setCurrent_song={setCurrent_song} audioRef={audioRef} isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>
                </div>
              </div>  
              <div className="row no-gutters" style={{marginBottom:'15%'}}>
                <div className = 'col-12'>
                     <MusicList listTitle={"English"} lang="ENGLISH" data={artistcollection} setcollection={setcollection} current_song={current_song} setCurrent_song={setCurrent_song} audioRef={audioRef} isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>
                </div>
              </div>    
              </div>
              }           
                {/* AJ AJ AJ AJ AJ AJ AJ AJ AJ AJ AJ AJ AJ AJ AJ AJ AJ AJ AJ AJ AJ AJ */}
            </div>
          </div>
          <Navbar current_song={collection[current_song]} mode={mode} setmode={setmode}>
          </Navbar>
        </div>
        </div>
      <div className="row position-fixed bottom-0 start-0 end-0 bottomNav" style={{height:'100px'}}>
        <div className='col-12'>
          <div className="container-fluid no-gutters">
          <div className="row botdiv w-100 m-0 p-0">
          <div className="col-sm-2 w-100">
          </div>
          <div className="col-sm-10 w-100 player__div m-0 p-0">
            {chn===true  && 
          <Player chn={chn} setchn={setchn} collection={collection} current_song={current_song} setCurrent_song={setCurrent_song} audioRef={audioRef} isPlaying={isPlaying} setIsPlaying={setIsPlaying}></Player>
            }
          </div>
          </div>
        </div>
        </div>
      </div>
      </div>
      }
      </div>
    )
}
export default Home


// function useWindowSize() {
//   const [windowSize, setWindowSize] = useState({
//     width: undefined,
//     height: undefined,
//   });
//   useEffect(() => {
//     function handleResize() {
//       setWindowSize({
//         width: window.innerWidth,
//         height: window.innerHeight,
//       });
//     }
//     window.addEventListener("resize", handleResize);
//     handleResize();
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);
//   return windowSize;
// }


            /* <div className="col-lg-7 right">
                 <h1>Logged In With User - {username}</h1>
                 <button onClick={logoutb}> LOGOUT YOU piece OF SHIT {username} </button>
            </div> */

              // const changevisibility = () => {
  //   document.getElementById("musiclistlist").style.visibility = "hidden";
  // }
  // useEffect(() => {
  //   if(mode==="HOME")
  //   {
  //     document.getElementById("musiclistlist").style.visibility = "visible";
  //   }
  //   else{
  //     document.getElementById("musiclistlist").style.visibility = "hidden";
  //   }
  // }, [mode])
  //const mode