import React from "react"
import "../components/register.css"
import LandingPage from "../components/LandingPage.js"
import {navigate} from "gatsby";
import "tachyons"
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from '../aws-exports';
Amplify.configure(awsconfig);


class IndexPage extends React.Component {
	constructor() {
		super()
		this.state = {
			isSignedIn: false,
		}
	}

	signIn = () => {
		this.setState({isSignedIn: true})
	}


	render() {
		return(<LandingPage/>)
	}
}

export default IndexPage
