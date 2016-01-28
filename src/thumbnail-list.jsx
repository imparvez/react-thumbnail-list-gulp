/*---- ThumbNailList Component----*/


//We are using React in this file, so we have to require 'react' js
var React = require('react'); //React library doesn't need path
var Thumbnail = require('./thumbnail'); //File which we have written need a path

//Which function needs to be exported(Making it available to other file)
module.exports = React.createClass({
	render: function() {
		var list = this.props.thumbnailData.map(function(thumbnailProps){
			return <Thumbnail {...thumbnailProps} />
		});

	return <div>{list}</div>
	}
})
//{...thumbnailProps} => React have a shortcut to pass an entire objects and not to worry about picking individual objects
/*this.props.thumbnailData => 
	[{
		imageUrl : 'http://formatjs.io/img/react.svg',
		header: 'Part One Tutorial',
		descriptions: 'React is the JavaScript framework',
		title: 'Learn Intro',
		number: 5
	},{
		imageUrl : 'http://formatjs.io/img/react.svg',
		header: 'Part Two Tutorial',
		descriptions: 'React is the JavaScript framework',
		title: 'Learn Components',
		number: 5
	},{
		imageUrl : 'http://formatjs.io/img/react.svg',
		header: 'Part Three Tutorial',
		descriptions: 'React is the JavaScript framework',
		title: 'Learn Views',
		number: 5
	}]
*/