/*---- Badge Component----*/


//We are using React in this file, so we have to require 'react' js
var React = require('react'); //React library doesn't need path

//Step:1 => All the dynamically placed component should be replaced by curly braces
//Which function needs to be exported(Making it available to other file)
module.exports = React.createClass({
	render: function() {
		return <button className="btn btn-primary" type="button">
		  {this.props.title} <span className="badge">{this.props.number}</span>
		</button>
	}
});