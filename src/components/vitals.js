import React from "react";
import "./transition.css"

class VitalForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			fever: "",
			temp: "",
			heart: "",
			heart_rate: "",
			oxygen: "",
			bp: "",
			error_message:"",
			bg: "white",
			visible: "",
		}
	}

	onOptionClick = (e) => {
		this.setState({[e.target.name]: e.target.id})
		console.log(this.state)	
	}

	onTypeEnter = (e) => {
		let x = e.target.value
		x = x.toLowerCase()
		this.setState({[e.target.id]: x})
		console.log(x)
	}

	componentDidMount() {
		setTimeout(()=>{this.setState({visible: true})}, 25)
	}

	render() {
		let {onVitalsUpdate} = this.props
		const onClick = (e) => {
			if (this.state.fever === "" || this.state.temp ==="" || this.state.heart==="" || this.state.heart_rate === "" || this.state.oxygen === "" || this.state.bp === "") {
				this.setState({error_message: "Please fill all the details"})
			} else {
				this.setState({error_message: ""})
				this.setState({bg: "rgb(136, 242, 216)"})
				setTimeout(()=>{this.setState({visible: false})},100)
				setTimeout(()=>{onVitalsUpdate(this.state)},500)
			}
		}
		return(
			<div className={(this.state.visible) ? "fadeIn" : "fadeOut"}>
				<div className="tl ba bw1 b--light-gray bg-white ba Avenir" style={{"font-family":"Avenir", width: "max(60%, 800px)"}}>
					<div className="w-100 bb mb4 bw1 b--light-gray">
	            	  <p className="f4 ml5 mb3 mt3 light-red dib">DAILY VITALS</p>
	        	    </div>
	        	    <div className="ma1">
				        <p className="mt3 ml5 b mb1 gray gender">DO YOU THINK YOU HAVE A FEVER?</p>
				      	<a onClick={this.onOptionClick} id="true" name="fever" className="f6 ml5 shadow-2 mb4 mt3 dark-gray pointer ph3 pv2 dib" style={{background: this.state.fever === "true" ? "rgb(136, 242, 216)" : "white", color: this.state.fever === "true" ? "white" : "black"}}>YES</a>
				        <a onClick={this.onOptionClick} id="false" name="fever" className="f6 ml2 shadow-2 mb4 mt3 dark-gray pointer ph3 pv2 dib" style={{background: this.state.fever === "false" ? "rgb(136, 242, 216)" : "white", color: this.state.fever === "false" ? "white" : "black"}}>NO</a>
			    	</div>
			    	<div className="mt2 mb2">
				        <p className="mt3 ml5 b pa0 mb0 gray gender">WHAT IS YOUR TEMPERATURE?</p>
				        <div style={{display: "flex"}}>
				        	<input id="temp" onChange={this.onTypeEnter} type="number" min="0" className="mt3 ml5 mr2 bg-washed-green tc" style={{"height":"50px", "width":"15%","border":"none"}}/>
				            <p className="mt4 f6 b ml2 gray">DEGREES </p>
				        </div>
				    </div>
				    <div className="mv2">
				        <p className="mt4 ml5 b pa0 mb0 gray gender">HOW DOES YOUR HEART RATE FEEL?</p>
				        <input id="heart" onChange={this.onTypeEnter} type="text" placeholder="Give us a short description" className="mt3 ml5 mr2 bg-washed-green ph2" style={{"height":"50px", "width":"40%","border":"none"}}/>
				    </div>
				    <div style={{"display":"flex"}}>
					    <div className="mv2">
					        <p className="mt4 ml5 b pa0 mb0 gray gender">HEART RATE</p>
					        <div style={{display: "flex"}}>
					        	<input id="heart_rate" onChange={this.onTypeEnter} type="number" min="0" className="mt3 ml5 mr2 bg-washed-green tc" style={{"height":"50px", "width":"30%","border":"none"}}/>
					            <p className="mt4 f6 b ml2 gray">BPM </p>
					        </div>
					    </div>
					    <div className="mv2">
					        <p className="mt4 ml5 b pa0 mb0 gray gender">BLOOD PRESSURE</p>
					        <div style={{display: "flex"}}>
					        	<input id="bp" onChange={this.onTypeEnter} type="text" className="mt3 ml5 mr2 bg-washed-green tc" style={{"height":"50px", "width":"30%","border":"none"}}/>
					            <p className="mt4 f6 b ml2 gray">UNITS </p>
					        </div>
					    </div>
				    </div>
				    <div className="mt2 mb2">
				        <p className="mt3 ml5 b pa0 mb0 gray gender">OXYGEN SATURATION</p>
				        <div style={{display: "flex"}}>
				        	<input id="oxygen" onChange={this.onTypeEnter} type="number" min="0" className="mt3 ml5 mr2 bg-washed-green tc" style={{"height":"50px", "width":"15%","border":"none"}}/>
				            <p className="mt4 f6 b ml2 gray">UNITS </p>
				        </div>
				    </div>
				    <p className="f4 mt4 b red tc">{this.state.error_message}</p>
				    <div className="mt5 mb3">
			          <p onClick={onClick} className="pointer tc pv3 f3 shadow-1" style={{"margin": "auto", "border-radius":"50%", width:"9%", background: this.state.bg, color: (this.state.bg === "white") ? "#013220" : "white"}}>✓</p>
			        </div>
				</div>
			</div>
		)
	}
}

export default VitalForm;