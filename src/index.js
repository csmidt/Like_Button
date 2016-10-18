var React = require('react')
var ReactDOM = require('react-dom')
var App = require ('./App')
import './index.css';



var LikeButton = React.createClass ({

	getInitialState: function() {
		return {
			counter:0,
			label: "s"

		}

	},

	upDateNumber: function () {
		var s = "s";
		if (this.state.counter === 0) {
			s = ""
		}
		this.setState({
			counter: this.state.counter + 1,
			label: s
		})
	},

	


	render: function() {
		return (
			<button id="button" onClick={this.upDateNumber}>{this.state.counter} Like{this.state.label}</button>
		)

	
	} 
	
	

})







ReactDOM.render(<LikeButton />,document.getElementById('root'));
