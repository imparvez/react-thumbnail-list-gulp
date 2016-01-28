/*----  Slider Structure ----*/

//We are using React in this file, so we have to require 'react' js
var React = require('react'); //React library doesn't need path

module.exports = React.createClass({
	render: function(){
		return <div><img src={this.props.content} /></div>
	}
})