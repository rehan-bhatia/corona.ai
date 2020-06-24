import React from "react"
import Navbar from "../components/Navbar.js"
import "../components/about.css"
import { Link, navigate } from "gatsby"


class About extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			email: "",
		}
	}

	componentDidMount() {
		if (this.props.location.state !== null && this.props.location.state.email !== undefined) {
			this.setState({email: this.props.location.state.email})
			console.log(this.props.location.state.email)
		} else if (this.props.location.state === null || this.props.location.state.email === undefined){
			navigate("/")
		} else {
			navigate("/")
		}
	}

	render() {
		return(
			<div>
				<Navbar email={this.state.email}/>
				<div className="grid-box1">
					<article class="w-100 Avenir shadow-4 hidden ba b--black-10">
					  <h1 class="f5 bg-white br3 br--top gray mv0 pv3 ph5">OUR UNIQUE APPROACH</h1>
					  <div class="pl4 pb2 pt3 bt b--black-10">
					  	<p className="ml3 header">USING AI TO HELP DEFEAT CORONA</p>
					  	<p className="ml3 mt4 dark-gray body tj">With everything that is happening in the world today we needed to figure out a way to not only help solve the uncertainty and anxiety that comes along with the pandemic. Our method uses a proprietary algorithm that is getting better with every day, with every person who helps us by updating their symptoms, and with geographic data provided by outside sources. We take all of those data points and use them to make a prediction that you can trust and help you decide what to do next and how to handle it. We don’t claim to replace an emergency room but we do give you the advice you need to make your next step. </p>
					  	<p className="ml3 mt4 body tj dark-gray">Use our site, put in your data to the best of your ability, and we will do our best to tell you how at risk you are for Corona and how worried you should be</p>
					  </div>
					</article>
					<article class="w-100 Avenir shadow-4 hidden ba b--black-10">
					  <h1 class="f5 bg-white br3 br--top gray mv0 pv3 ph5">HOW TO USE</h1>
					  <div class="ph4 pb2 pt3 bt b--black-10">
					  	<p className="ml3 header">STEPS</p>
					  	<div className="mt4 body tj dark-gray">
						  	<div className="ml3 list-div mv3">
							  <span>1</span>  Sign in and provide some initial data
							</div>
							<div className="ml3 list-div mv3">
							  <span>2</span>  Provide daily data about your symptoms and vitals. If you see a red bubble around one of the updates that means you should fill it out. Our prediction is only as good as your data!
							</div>
							<div className="ml3 list-div mv3">
							  <span>3</span>  Keep checking. Keep updating. And keep getting better predictions.
							</div>
					  	</div>
					  </div>
					</article>
				</div>
			</div>
		)
	}
}

export default About;