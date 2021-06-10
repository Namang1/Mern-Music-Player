import React,{useState,useEffect} from 'react'
import "./cd.css"
import $ from 'jquery';
import image from "../../../resources/player.svg"
const Cd = ({isPlaying}) => {
		// $('.animatebtn').on('doubleclick',function() {
		// 	console.log("SCS")
		// 		// $("img.image").toggleClass("needle");
		// 		setTimeout(function() {
		// 			$("div.record").toggleClass("animate",1000);
		// 		}, 1000);      
		// });

		useEffect(() => {
			if(isPlaying)
			{
				$("img.image").addClass("needle");
				setTimeout(function() {
					$("div.record").addClass("animate",1000);
					}, 1000); 
			}
			else{
				$("img.image").removeClass("needle");
				$("div.record").removeClass("animate",1000);		
			}			
		}, [isPlaying])

		// const rotate = () => {
		// 	console.log("LLLD")
		// 	$("img.image").toggleClass("needle");
		// 		setTimeout(function() {
		// 		$("div.record").toggleClass("animate",1000);
		// 		}, 1000);  
		// }
	return (
		<div >
			 <div className="player1">
    			<div className="record">
      			<div className="label"></div>
     			<div className="spindle"></div>
    			</div>
				<div>
			</div>	
			</div>
			<img src={image} className="image"/>	
		</div>
	)
}

export default Cd
















