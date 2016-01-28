/*---- ThumbNail Component----*/


//We are using React in this file, so we have to require 'react' js
var React = require('react'); //React library doesn't need path
var Badge = require('./badge'); //File which we have written need a path

//Which function needs to be exported(Making it available to other file)
module.exports = React.createClass({
	render: function() {
		return  <div className="col-sm-3 thumbnail">
	      <img src={this.props.imageUrl} />
	      <div className="caption">
	        <h3>{this.props.header}</h3>
	        <p>{this.props.descriptions}</p>
	        <p>
	        	<Badge title={this.props.title} number={this.props.number}/>
	        </p>
	      </div>
	    </div>
	}
});