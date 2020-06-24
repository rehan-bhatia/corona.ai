import React from "react";
import "./transition.css"
import Amplify, { Storage } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);


class PersonalForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			travel: "",
			risk_person: "",
			known_found: "",
			happy: "",
			picture:'UPLOAD IMAGE',
			video:'',
			error_message:"",
			on_color: "rgb(136, 242, 216)",
			visible: "",
			bg:"white",
		}
	}

	onOptionClick = (e) => {
		this.setState({[e.target.name]: e.target.id})
		console.log(this.state)
		
	}

	componentDidMount() {
		setTimeout(()=>{this.setState({visible: true})}, 25)
	}

	render() {
		let {onPersonalUpdate}=this.props
		const onChange = (e) => {
		  this.setState({error_message: ""})
	      let file = e.target.files[0];
	      this.setState({picture: "UPLOADING..."})
	      Storage.put('image.png', file, {
	          contentType: 'image/png'
	      })
	      .then (result => {
	      	console.log(result)
	      	this.setState({picture: "IMAGE UPLOADED"})
	      })
	      .catch(err => {
	      	this.setState({picture: "UPLOAD IMAGE"})
	      	this.setState({error_message: "Wrong format. Please try again"})
	      });
	    }

	    const onClick = () => {
	    	if (this.state.travel==="" || this.state.risk_person==="" || this.state.known_found === "" || this.state.picture === "UPLOAD IMAGE" || this.state.happy === "") {
	    		this.setState({error_message:"Please enter all details."})
	    	} else if (this.state.picture === "UPLOADING...") {
	    		this.setState({error_message:"Please wait while the image is being uploaded."})
	    	} else {
	    		this.setState({error_message: ""})
				this.setState({bg: "rgb(136, 242, 216)"})
				setTimeout(()=>{this.setState({visible: false})},100)
				setTimeout(()=>{onPersonalUpdate(this.state)},500)
	    	}
	    }

		return(
			<div className={(this.state.visible) ? "fadeIn" : "fadeOut"}>
				<div className="tl ba bw1 b--light-gray bg-white ba Avenir" style={{"font-family":"Avenir", width: "max(60%, 800px)"}}>
			        <div className="w-100 bb mb4 bw1 b--light-gray">
	            	  <p className="f4 ml5 mb3 mt3 light-red dib">PERSONAL</p>
	        	    </div>
	        	    <div className="ma1">
				        <p className="mt3 ml5 b mb1 gray gender">DID YOU TRAVEL TODAY?</p>
				      	<a onClick={this.onOptionClick} id="true" name="travel" className="f6 ml5 shadow-2 mb3 mt3 dark-gray pointer ph3 pv2 dib" style={{background: this.state.travel === "true" ? this.state.on_color : "white", color: this.state.travel === "true" ? "white" : "black"}}>YES</a>
				        <a onClick={this.onOptionClick} id="false" name="travel" className="f6 ml2 shadow-2 mb3 mt3 dark-gray pointer ph3 pv2 dib" style={{background: this.state.travel === "false" ? this.state.on_color : "white", color: this.state.travel === "false" ? "white" : "black"}}>NO</a>
			    	</div>
			    	<div className="ma1">
				        <p className="mt3 ml5 b mb1 gray gender">WERE YOU EXPOSED TO A HIGH-RISK PERSON TODAY?</p>
				      	<a onClick={this.onOptionClick} id="true" name="risk_person" className="f6 ml5 shadow-2 mb3 mt3 dark-gray pointer ph3 pv2 dib" style={{background: this.state.risk_person === "true" ? this.state.on_color : "white", color: this.state.risk_person === "true" ? "white" : "black"}}>YES</a>
				        <a onClick={this.onOptionClick} id="false" name="risk_person" className="f6 ml2 shadow-2 mb3 mt3 dark-gray pointer ph3 pv2 dib" style={{background: this.state.risk_person === "false" ? this.state.on_color : "white", color: this.state.risk_person === "false" ? "white" : "black"}}>NO</a>
			    	</div>
			    	<div className="ma1">
				        <p className="mt3 ml5 b mb1 gray gender">WAS ANYONE YOU KNOW FOUND TO BE COVID POSITIVE?</p>
				      	<a onClick={this.onOptionClick} id="true" name="known_found" className="f6 ml5 shadow-2 mb3 mt3 dark-gray pointer ph3 pv2 dib" style={{background: this.state.known_found === "true" ? this.state.on_color : "white", color: this.state.known_found === "true" ? "white" : "black"}}>YES</a>
				        <a onClick={this.onOptionClick} id="false" name="known_found" className="f6 ml2 shadow-2 mb3 mt3 dark-gray pointer ph3 pv2 dib" style={{background: this.state.known_found === "false" ? this.state.on_color : "white", color: this.state.known_found === "false" ? "white" : "black"}}>NO</a>
			    	</div>
			    	<div className="ma1">
				        <p className="mt3 ml5 b mb1 gray gender">HOW ARE FEELING TODAY?</p>
				      	<a onClick={this.onOptionClick} id="true" name="happy" className="ml5 mb3 mt1 dark-gray pointer ph3 pv2 dib" style={{"font-size": this.state.happy === "true" ? "44px" : "40px"}}>😃</a>
				        <a onClick={this.onOptionClick} id="false" name="happy" className="ml2 mb3 mt1 dark-gray pointer ph3 pv2 dib" style={{"font-size": this.state.happy === "false" ? "44px" : "40px"}}>🙁</a>
			    	</div>
			    	<div className="ma1">
				        <p className="mt3 ml5 b mb1 gray gender">IMPORT PICTURE</p>
				      	<p onClick={()=>document.getElementById('hiddenInputButton').click()} className="pointer ml5 mt3 pt4 ph3 f6 b gray bg-washed-blue w-30" style={{height:"150px", "padding-top":"60px", "background":"rgb(243,245,248)"}}>{this.state.picture}</p>
				      	<input id="hiddenInputButton" onClick={onChange} label="" placeholder="" type="file" style={{display:"none"}}/>
			    	</div>
			    	<p className="f4 mt4 b red tc">{this.state.error_message}</p>
			    	<div className="mt4 mb3">
			          <p onClick={onClick} className="pointer tc pv3 f3 shadow-1" style={{"margin": "auto", "border-radius":"50%", width:"9%", background: this.state.bg, color: (this.state.bg === "white") ? "#013220" : "white"}}>✓</p>
			        </div>
			    </div>
		    </div>
			
		)
	}
}

export default PersonalForm;