var React = require('react');
var helpers = require("../utils/helpers.js");

var Archive = React.createClass({
	getInitialState: function(){
		return {title: ''}
	},
	componentWillMount: function(){
		helpers.getArticles()
      	.then(function(response){
      		console.log("Articles: " + response);
	    }.bind(this));
	},
	componentDidUpdate: function(){
		//make sure we haven't just saved the article
		//---------------I need to add something to make sure it isn't
		//---------------a duplicate. Maybe just in the article schema
		if (this.props.title != this.state.title){
			//set the state to the current title, to check against next
			//time save is hit
			this.setState({
				title: this.props.title,
			})
			//store the data in a single object to send to the helper
			var articleData = {
				title: this.props.title,
				url: this.props.url,
				description: this.props.description
			}
			//using axios, we post to the server
			helpers.saveArticle(articleData)
			.then(function(response){
				console.log(response);
			}.bind(this));
		}
	},
	render: function(){
		return(
			<div className = 'container'>
				<div className = 'row'>
					<div className = 'col-md-12'>
						<div className = 'component'>
							{this.props.title}
						</div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Archive;