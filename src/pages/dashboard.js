import React from "react"
import { Link, navigate } from "gatsby"
import Navbar from "../components/Navbar.js"
import Layout from "../components/layout"
import SEO from "../components/seo"
import List from "../components/list.js"
import Table from "../components/table.js"
import Prediction from "../components/prediction.js"
import PersonalForm from "../components/personal.js"
import VitalForm from "../components/vitals.js"
import SymptomsForm from "../components/symptoms.js"

class Dashboard extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			route: "vitals",
			symptoms: 0,
			vitals: 0,
			personal: 0,
			daily_sym: {
				fever:"",
				chills: "",
				cough: "",
				breath: "",
				throat: "",
				bodyache: "",
				headache:"",
				vomit: "",
				diarrhea: "",
				fatigue: "",
			},
			vitals_data: {	
				heart: "",
				heart_rate: "",
				bp: "",
				oxygen: "",
				temp: "",
				fever: "",
			},
			personal_data: {
				travel:"",
				risk_person:"",
				known_found:"",
				happy:"",
				picture:"",
				video:"",
			},
			email:"",
			clientId: "",
		}
	}

	onRouteChange = (route) => {
		this.setState({route: route})
		console.log(this.state)
	}

	onDailyUpdate = (input) => {
		this.setState({daily_sym: {
			fever: input.fever,
			chills: input.chills,
			cough: input.cough,
			breath: input.breath,
			throat: input.throat,
			bodyache: input.bodyache,
			headache: input.headache,
			vomit: input.vomit,
			diarrhea: input.diarrhea,
			fatigue: input.fatigue
		}})
		console.log(this.state)
		this.setState({symptoms: 1})
		this.onRouteChange("personal")
	}

	onVitalsUpdate = (input) => {
		this.setState({vitals: 1})
		this.setState({vitals_data: {
			temp: input.temp,
			bp: input.bp,
			heart: input.heart,
			heart_rate: input.heart_rate,
			oxygen: input.oxygen,
			fever: input.fever,
		}})
		console.log(this.state)
		this.onRouteChange("symptoms")
	}


	onPersonalUpdate = (input) => {
		this.setState({personal:1})
		this.setState({personal_data: {
			travel: input.travel,
			known_found: input.known_found,
			risk_person: input.risk_person,
			picture: input.picture,
			video: input.video,
			happy: input.happy,
		}})
		console.log(this.state)
		this.onRouteChange("pred")
	}

	componentDidMount() {
		if (this.props.location.state !== null && this.props.location.state.email !== undefined) {
			this.setState({email: this.props.location.state.email})
			this.setState({clientId: this.props.location.state.clientId})
			console.log(this.props.location.state.email)
		} else if (this.props.location.state === null || this.props.location.state.email === undefined){
			navigate("/")
		} else {
			navigate("/")
		}
	}

	render() {
		let output;
		if (this.state.route === "vitals") {
				output = <VitalForm onVitalsUpdate={this.onVitalsUpdate}/>
		} else if (this.state.route === "symptoms") {
				output = <SymptomsForm onDailyUpdate={this.onDailyUpdate}/>
		} else if (this.state.route==="personal") {
				output = <PersonalForm onPersonalUpdate={this.onPersonalUpdate}/>
		} else if (this.state.route==="pred") {
			if (this.state.vitals === 0) {
				this.setState({route: "vitals"})
			} else if (this.state.symptoms === 0) {
				this.setState({route: "symptoms"})
			} else {
				output = <Prediction data="high risk"/>
			}
		}
		return (
			<div>
			    <Navbar email={this.state.email} clientId={this.state.clientId}/>
			    <div className="ma2 ph6" style={{display: "grid", "grid-template-columns":"1fr 4fr", gap: "20px"}}>
				  <div style={{"min-width":"290px"}}>
				  	<List symptoms = {this.state.symptoms} personal = {this.state.personal} vitals = {this.state.vitals} onRouteChange={this.onRouteChange} route={this.state.route}/>
				  	<Table/>
				  </div>
				  <div>
				    {output}
				  </div>
				</div>
			</div>
		);
	}
}
  


export default Dashboard
