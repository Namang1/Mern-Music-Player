import React,{useEffect,useState,useRef} from 'react';
import axios from 'axios';
import Player from './Player';
import { Divider, Hidden } from '@material-ui/core';
import './home.css' 
import Navbar from './navbar/Navbar'
import collections from './musiccollection'
import Topinfo from './Topinfo'

function Home(props) {
  const collection = collections.coldplay_songs
  const [current_song, setCurrent_song] = useState(0)

  const size = useWindowSize();


    return (
      <div className="container-fluid" style={{height:'100vh'}}>
        <div className="row topnav"></div>
        <div className="row cendiv">
          <div className="col-12" style={{paddingRight:'0'}}>
          <div className="main-content">
            <div className="container-fluid" style={{paddingLeft:'0'}}>
              { size.width<=929 &&
              <div className="row no-gutters">
                <div className="col-4">
                  {/* SVG OR BLANK SPACE */}
                </div>
                <div className="col-3">
                  <img style={{width:'50%'}} src={collection[current_song].img}></img> 
                </div>
                <div className="col-5">
                  {collection[current_song].songName}
                  <br/>
                  {collection[current_song].artistName}
                </div>                            
              </div>
              }
              {/* HERE */}
              <div className="row no-gutters">
                <div className = 'col-12'>
                     {/* MUSIC LIST */}
                </div>
              </div>   
                {/* HERE */}
            </div>
          </div>
          <Navbar current_song={collection[current_song]}>
          </Navbar>
        </div>
        </div>
      <div className="row">
        <div className='col-12'>
          <div className="container-fluid">
          <div className="row botdiv w-100">
          <div className="col-sm-2 w-100">
          </div>
          <div className="col-sm-10 w-100">
          <Player collection={collection} current_song={current_song} setCurrent_song={setCurrent_song}></Player>
          </div>
          </div>
        </div>
        </div>
      </div>
      </div>
    )
}
export default Home


function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}


            {/* <div className="col-lg-7 right">
                 <h1>Logged In With User - {username}</h1>
                 <button onClick={logoutb}> LOGOUT YOU piece OF SHIT {username} </button>
            </div> */}