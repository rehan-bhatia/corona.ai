import React from "react"
import "./transition.css"

class Prediction extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: ""
        }
    }

    componentDidMount() {
        setTimeout(()=>{this.setState({visible: true})}, 25)
    }

    render() {
      let {data} = this.props
      return (
        <div className={(this.state.visible) ? "fadeIn" : "fadeOut"}>
          	<div className="ba bw1 tl b--light-gray pb4 bg-white ba Avenir" style={{"font-family":"Avenir", width: "max(60%, 800px)"}}>
                <div className="w-100 bb bw1 b--light-gray">
                    <p className="f4 ml5 mb3 mt3 dark-gray dib" style={{"margin-right":"10rem"}}>ALGORITHM BASED PREDICTION</p>
                </div>
                <div style={{display:"flex", "flex-wrap":"wrap"}}>
                    <p className="ml5 mt4 w-40 dib" style={{"font-size":"72px", "font-weight":"500", color: "rgb(127,90,179)", "line-height":"1.6"}}>{data.toUpperCase()}</p>
                    <img className="dib pt3 w-40" src="https://i.ibb.co/j45jqDj/Screenshot-2020-06-15-at-10-40-39-PM.png"/>
                </div>
                <div>
                    <p className="f3 dark-gray ml5 mt4 b">Don't Panic. Go to a medical professional.</p>
                    <p className="f5 gray ml5 mr6" style={{"line-height":"1.5"}}>This just means that you should go checked out. There is a high enough likelihood that based on your symptoms you have Coronavirus for you to go to a hospital and get tested. Come back and update so we can keep updating our predictions</p>
                </div>
                <div className="w-100 bt bb bw1 b--light-gray mt4">
                    <p className="f5 ml5 mt2 mb2 dark-gray dib">NEXT STEPS</p>
                </div>
                <div className="ml5 list-div mv3">
                    <span>1</span>  Start to quarantine yourself
                </div>
                <div className="ml5 mb0 list-div mv3">
                    <span>2</span>  Visit the nearest hospital to get tested further
                </div>
                <div className="w-100 bt bb bw1 b--light-gray mt3">
                    <p className="f5 ml5 mt2 mb2 dark-gray dib">LINKS</p>
                </div>
                <div>
                    <p className="ml4 mt3 f5 dim pointer ph4 pv3 mb2 b dib white bg-light-red">CALL THE DOCTOR</p>
                    <p className="ml3 mt3 f5 dim pointer ph4 pv3 mb2 b dib white bg-gray">LINK TO CDC</p>
                    <p className="ml3 mt3 f5 dim pointer ph4 pv3 mb2 b dib white" style={{"background":"rgb(206,211,255)"}}>DIRECTIONS TO ER</p>
                </div>
            </div>
        </div>
      )
    }
}

export default Prediction;