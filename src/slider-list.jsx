var React = require('react'); //React library doesn't need path
var SliderStructure = require('./sliderStructure'); //File which we have written need a path

//Which function needs to be exported(Making it available to other file)
module.exports = React.createClass({
	render: function() {
		var sliderMegalist = this.props.sliderObjDetails.map(function(sliderObjDetail){
			return <SliderStructure {...sliderObjDetail} />
		});

	return <div>{sliderMegalist}</div>
	}
})