import React from "react";
import "./transition.css"

class SymptomsForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
				fever: false,
				chills: false,
				cough: false,
				breath: false,
				throat: false,
				bodyache: false,
				headache: false,
				vomit: false,
				diarrhea: false,
				fatigue: false,
				on_color: "rgb(255, 127, 129)",
				off_color: "rgb(243,245,248)",
				visible: "",
				bg: "white",
		}
	}

	onClick = (e) => {
	    let x = this.state[e.target.id]
	    this.setState({[e.target.id]: !x})
	    console.log(e.target.id)
	    console.log(!x)
	  }

	componentDidMount() {
		setTimeout(()=>{this.setState({visible: true})}, 25)
	}

	render() {
		let {onDailyUpdate} = this.props
		const onFinalClick = (e) => {
			this.setState({bg: "rgb(136, 242, 216)"})
			setTimeout(()=>{this.setState({visible: false})}, 100)
			setTimeout(()=>{onDailyUpdate(this.state)}, 500)
		}

		return(
			<div className={(this.state.visible) ? "fadeIn" : "fadeOut"}>
			  <div className="tl ba bw1 b--light-gray bg-white ba Avenir" style={{"font-family":"Avenir", width: "max(60%, 800px)"}}>
			    <div className="w-100 bb bw1 b--light-gray">
            	  <p className="f4 ml5 mb3 mt3 light-red dib" style={{"margin-right":"10rem"}}>DAILY SYMPTOMS</p>
        	    </div>
				<p className="f2 ml5 mt4 gray mb3">DO YOU HAVE ANY OF THESE SYMPTOMS? (Y/N)</p>
		        <p className="f5 ml5 mt2 gray w-50 mb3">Click the boxes that apply to you</p>
		        <div className="grid-box pa0 w-100">
		          <p onClick={this.onClick} id="fever" className="tl f4 pointer ml5 mr3 br2 pv3 ph4 mb0 dib" style={{background: this.state.fever ? this.state.on_color : this.state.off_color, color: this.state.fever ? "white" : "gray"}}>FEVER</p>
		          <p onClick={this.onClick} id="headache" className="tl f4 pointer ml1 mr5 br2 pv3 ph4 mb0 dib" style={{background: this.state.headache ? this.state.on_color : this.state.off_color, color: this.state.headache ? "white" : "gray"}}>HEADACHE</p> 
		          <p onClick={this.onClick} id="cough" className="tl f4 pointer ml5 mr3 br2 pv3 ph4 mb0 dib" style={{background: this.state.cough ? this.state.on_color : this.state.off_color, color: this.state.cough ? "white" : "gray"}}>COUGHING</p>
		          <p onClick={this.onClick} id="vomit" className="tl f4 pointer ml1 mr5 br2 pv3 ph4 mb0 dib" style={{background: this.state.vomit ? this.state.on_color : this.state.off_color, color: this.state.vomit ? "white" : "gray"}}>VOMITING</p>   
		          <p onClick={this.onClick} id="chills" className="tl f4 pointer ml5 mr3 br2 pv3 ph4 mb0 dib" style={{background: this.state.chills ? this.state.on_color : this.state.off_color, color: this.state.chills ? "white" : "gray"}}>CHILLS OR SWEATING</p>
		          <p onClick={this.onClick} id="breath" className="tl f4 pointer ml1 mr5 br2 pv3 ph4 mb0 dib" style={{background: this.state.breath ? this.state.on_color : this.state.off_color, color: this.state.breath ? "white" : "gray"}}>DIFFICULTY IN BREATHING</p>
		          <p onClick={this.onClick} id="diarrhea" className="tl f4 pointer ml5 mr3 br2 pv3 ph4 mb0 dib" style={{background: this.state.diarrhea ? this.state.on_color : this.state.off_color, color: this.state.diarrhea ? "white" : "gray"}}>DIARRHEA</p> 
		          <p onClick={this.onClick} id="bodyache" className="tl f4 pointer ml1 mr5 br2 pv3 ph4 mb0 dib" style={{background: this.state.bodyache ? this.state.on_color : this.state.off_color, color: this.state.bodyache ? "white" : "gray"}}>BODY ACHE</p>
		          <p onClick={this.onClick} id="throat" className="tl f4 pointer ml5 mr3 br2 pv3 ph4 mb0 dib" style={{background: this.state.throat ? this.state.on_color : this.state.off_color, color: this.state.throat ? "white" : "gray"}}>SORE THROAT</p>   
		          <p onClick={this.onClick} id="fatigue" className="tl f4 pointer ml1 mr5 br2 pv3 ph4 mb0 dib" style={{background: this.state.fatigue ? this.state.on_color : this.state.off_color, color: this.state.fatigue ? "white" : "gray"}}>FATIGUE/TIREDNESS</p>		      
		        </div>
		        <div className="mt5 mb3">
		          <p onClick={onFinalClick} className="pointer tc pv3 f3 shadow-1" style={{"margin": "auto", "border-radius":"50%", width:"9%", background: this.state.bg, color: (this.state.bg === "white") ? "#013220" : "white"}}>✓</p>
		        </div>
		      </div>
		    </div>
		)
	}
	
}

export default SymptomsForm;