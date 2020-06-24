import React from "react"
import Register1 from "../components/register1.js"
import Register2 from "../components/register2.js"
import Register3 from "../components/register3.js"
import Register4 from "../components/register4.js"
import RegNav from "../components/reg_nav.js"
import '../fonts/TenaliRamakrishna-Regular.ttf'
import {navigate} from "gatsby";
import {
  isBrowser,
  isMobile
} from "react-device-detect";

class Register extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			route:"account",
			first_name:"",
			last_name:"",
			email:"",
			pass: "",
			age: "",
			zip: "",
			gender: "",
			allergies: [],
			heart_disease: false,
      		blood_pressure: false,
      		lung_disease: false,
      		diabetes: false,
      		neuro_disease: false,
      		kidney_liver: false,
      		cancer: false,
      		smoker: false,
      		pregnant: false,
      		obesity: false,
      		weak_immunity: false,
		}
	}

	onAccountSubmit = (data) => {
		this.setState({first_name: data.first_name})
		this.setState({last_name: data.last_name})
		this.setState({email: data.email})
		this.setState({pass: data.pass})
		this.setState({age: data.age})
		this.setState({zip: data.zip})
		this.setState({gender: data.gender})
		this.setState({route: "allergies"})
		console.log(data)
	}

	onAllergiesSubmit = (data1, data2) => {
		let arr = data1.concat(data2);
		this.setState({allergies: arr})
		this.setState({route:"history"})
		console.log(this.state)
	}
	onRouteChange = (route) => {
		this.setState({route: route})
	}

	onFinalSubmit = (data) => {
		if (data !== "nota") {
			this.setState({heart_disease: data.heart_disease})
			this.setState({blood_pressure: data.blood_pressure})
			this.setState({diabetes: data.diabetes})
			this.setState({obesity: data.obesity})
			this.setState({lung_disease: data.lung_disease})
			this.setState({cancer: data.cancer})
			this.setState({pregnant: data.pregnant})
			this.setState({smoker: data.smoker})
			this.setState({weak_immunity: data.weak_immunity})
			this.setState({neuro_disease: data.neuro_disease})
			this.setState({kidney_liver: data.kidney_liver})
			console.log(this.state)
			this.setState({route: "success"})
		}
	}

	render() {
		let output;
		if (this.state.route === "account") {
			output = <Register1 onAccountSubmit={this.onAccountSubmit}/>
		} else if (this.state.route==="allergies") {
			output = <Register2 onAllergiesSubmit={this.onAllergiesSubmit} onRouteChange={this.onRouteChange}/>
		} else if (this.state.route === "history") {
			output = <Register3 onFinalSubmit={this.onFinalSubmit} onRouteChange={this.onRouteChange}/>
		} else if (this.state.route === "success") {
			output = <Register4/>
		}

		return(
			<div>
				<div className="mt0 bb mb3 bw1 b--light-gray tc w-100">
					<h1 onClick={()=>navigate("/")} class="pointer mt0 fw1 tc mb3 f3" style={{"font-family":"Avenir", color: "rgb(127,90,179)"}}>HelpDefeatCorona.org</h1>
					<RegNav route={this.state.route}/>
				</div>
				{output}
			</div>
		)
	}
}

export default Register;