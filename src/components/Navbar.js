import React from 'react';
// import { BrowserView, MobileView} from "react-device-detect";
import '../fonts/TenaliRamakrishna-Regular.ttf'
import {Link, navigate} from "gatsby"
import Amplify, { Auth } from 'aws-amplify';

const Navbar = ({email, clientId}) => {
	const onSignOut = (clientId) => {
		Auth.signOut()
		navigate("/")
	}
	return(
		<header class="black-80 tc pv3 avenir w-100">
		  <h1 class="mt0 mb2 fw1" style={{"font-family":"Avenir","font-size":"1.6rem", color: "rgb(127,90,179)"}}>HelpDefeatCorona.org</h1>
		  <nav class="bb tc center dib b--light-gray bw2 pb0 w-100 mt2">
		    <p onClick={()=>navigate("/dashboard", {state: {email: email}})} className="f6 pointer f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa2 pb2 ph4-l">Dashboard</p>
		    <p onClick={()=>navigate("/about", {state: {email: email}})} class="f6 pointer f5-l link bg-animate black-80 hover-bg-washed-red dib pa2 ph4-l pb2 ">Our Unique Approach</p>
		    <a class="f6 f5-l link bg-animate black-80 hover-bg-light-pink dib pa2 ph4-l pb2" href="/">Resources</a>
		    <a class="f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa2 ph4-l pb2" href="/">Settings</a>
		    <a onClick={onSignOut} class="f6 f5-l link pointer bg-animate black-80 hover-bg-light-gray dib pa2 ph4-l pb2">Sign Out</a>
		  </nav>

		</header>
		);
}

export default Navbar;

