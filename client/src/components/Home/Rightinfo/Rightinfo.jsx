import React,{useEffect} from 'react'
import "./Rightinfo.css"
import $ from 'jquery';

const Rightinfo = ({currname}) => {
		// useEffect(() => {
		// 	for(var i =0; i< 20; i++)
		// 	{
		// 	var h = (Math.random()*10)
		// 	$('.wrapper div:nth-child('+i+')').animate({marginTop : h+"px"})
		// 	}
		// }, [])
	return (
	<>
		    <div className="css_animation">
			<h1 className="song">{currname.length<=24?currname:currname.substr(0,24)+"..."}</h1>
				<div className="wrapper">
					<div className="barsbhutsaarebars"></div>
					<div className="barsbhutsaarebars"></div>
					<div className="barsbhutsaarebars"></div>
					<div className="barsbhutsaarebars"></div>
					<div className="barsbhutsaarebars"></div>
					<div className="barsbhutsaarebars"></div>
					<div className="barsbhutsaarebars"></div>
					<div className="barsbhutsaarebars"></div>
					<div className="barsbhutsaarebars"></div>
					<div className="barsbhutsaarebars"></div>
					<div className="barsbhutsaarebars"></div>
					<div className="barsbhutsaarebars"></div>
					<div className="barsbhutsaarebars"></div>
					<div className="barsbhutsaarebars"></div>
					<div className="barsbhutsaarebars"></div>
					<div className="barsbhutsaarebars"></div>
					<div className="barsbhutsaarebars"></div>
					<div className="barsbhutsaarebars"></div>
					<div className="barsbhutsaarebars"></div>
					<div className="barsbhutsaarebars"></div>
					<div className="barsbhutsaarebars"></div>
					<div className="barsbhutsaarebars"></div>
				</div>
			</div>
			</>
		// </div>
	)
}

export default Rightinfo
