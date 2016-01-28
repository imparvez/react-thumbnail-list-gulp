//We are using React in this file, so we have to require 'react' js
var React = require('react'); //React library doesn't need path
var ThumbnailList = require('./thumbnail-list'); //File which we have written need a path
var SliderList = require('./slider-list'); //File which we have written need a path


/*--- Place kick off the start of our application ---*/


//options = { thumbnailData: [{}, {}, {}, {}]
	var options = {
		thumbnailData: [{
			imageUrl : 'http://in.bmscdn.com/events/moviecard/ET00029122.jpg',
			header: 'Airlift',
			descriptions: 'Hindi',
			title: 'Book Now'
		},{
			imageUrl : 'http://in.bmscdn.com/events/moviecard/ET00036781.jpg',
			header: 'Jugni',
			descriptions: 'Hindi',
			title: 'Book Now'
		},{
			imageUrl : 'http://in.bmscdn.com/events/moviecard/ET00035918.jpg',
			header: 'Kya Kool hain hum 3',
			descriptions: 'Hindi',
			title: 'Book Now'
		}]
	};
/*
	Slider Images/Options Objects
*/
var sliderObj = {
	sliderObjDetails: [{
		content: 'https://in.bmscdn.com/showcaseimage/eventimage/icicipocket.jpg',
	},{
		content: 'https://in.bmscdn.com/showcaseimage/eventtrailer/airlift-in-cinemas-now_1280x500_web-showcase.jpg',
	},{
		content: 'https://in.bmscdn.com/showcaseimage/eventimage/india-vs-srilanka_home_1280x500.jpg',
	},{
		content: 'https://in.bmscdn.com/showcaseimage/eventimage/mywallet.jpg',
	},{
		content: 'https://in.bmscdn.com/showcaseimage/eventimage/pvr_1280x500.jpg',
	},]
}
//Step:3 => Now Options object is avaiable inside the Badge componenet
var element = React.createElement(ThumbnailList, options);

var sliderElement = React.createElement(SliderList ,sliderObj)

//Inserting Badge component inside element having target class
React.render(element, document.querySelector('.target'));
React.render(sliderElement, document.querySelector('.sleider'));





