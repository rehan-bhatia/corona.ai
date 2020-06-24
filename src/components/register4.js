import React from "react"
import {navigate} from "gatsby"
import {  
  isBrowser,
  isMobile
} from "react-device-detect";
import "./register.css"

const Register4 = () => {
	return(
		<div className="shadow-3 tc b--light-gray ph5 pb4 bg-white ba Avenir" style={{margin:"auto", "font-family":"Avenir", width: (isMobile) ? "85vw" : "700px"}}>
			<p className="f1 mt4 dark-green mb3 ">SUCCESS</p>
			<p className="f4 w-70 mt2 gray" style={{"margin":"auto"}}>Your account was created successfully</p>
			<p className="f4 w-70 mt2 b gray" style={{"margin":"auto"}}>Please verify your email and then sign in to access your dashboard</p>
			<p onClick={()=>navigate("/")} class="f2 tc no-underline black bg-animate hover-bg-purple hover-white inline-flex pointer mb3 items-center pa3 ba border-box mt5">
				    <span class="pr1"> Sign In </span>
				</p>
		</div>
	);
}

export default Register4;