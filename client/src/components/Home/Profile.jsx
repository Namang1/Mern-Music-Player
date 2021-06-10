import React from 'react'
import "./profile.css"

function Profile({user, likecollection}) {
	return (
		<div className="profile m-auto">
                  <div className="row" style={{marginTop:'5%'}}>
                 <h1 className="profileh1">My User Profile</h1>            
                  </div>                
                  <div className=" profileCard" style={{marginTop:'10%'}}>
                    <div className="col-md-6 card1">
                      <img style={{width:'10rem'}} src={user.img!==""?user.img:"https://iconape.com/wp-content/png_logo_vector/doraemon-logo.png"}></img>
                    </div>
                    <div className="col-md-6 text-white card2">
                        <p className="userinfotitle">Username : <span className="userinfo">{user.username}</span></p>
                        <p className="userinfotitle">Email : <span className="userinfo"> {user.email}</span></p> 
                        <p className="userinfotitle">Member Since : <span className="userinfo"> {(user.date).substring(0, 10)}</span> </p>
                        <p className="userinfotitle">Playlists :<span className="userinfo"> 2</span></p> 
                        <p className="userinfotitle">Songs Liked :<span className="userinfo"> {likecollection}</span></p> 
                    </div>                    
                  </div>
			</div>
	)
}

export default Profile
