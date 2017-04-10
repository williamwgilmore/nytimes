var React = require('react');
var helpers = require("../utils/helpers.js");

var Archive = React.createClass({
	getInitialState: function(){
		return {data: [], title: ''}
	},
	componentWillMount: function(){
		this.updateArchive();
	},
	updateArchive: function(){
		helpers.getArticles()
      	.then(function(response){
      		this.setState({
      			data:response.data
      		})
      		console.log(response.data);
	    }.bind(this));
	},
	componentDidUpdate: function(){
		//make sure we haven't just saved the article
		//---------------I need to add something to make sure it isn't
		//---------------a duplicate. Maybe just in the article schema
		if (this.props.title != this.state.title){
			//set the state to the current title, to check against next
			//time save is hit
			console.log(this.state.title)
			this.setState({
				title: this.props.title
			})
			console.log(this.state.title);
			//store the data in a single object to send to the helper
			var articleData = {
				title: this.props.title,
				url: this.props.url,
				description: this.props.description,
			}
			//using axios, we post to the server
			helpers.saveArticle(articleData)
			.then(function(response){
				this.updateArchive();
			}.bind(this));
		}
	},
	sendRemove: function(event){
		var id = event.target.getAttribute('data-value');
		
		helpers.removeArticle(id)
      		.then(function(response){
      			//we then pass the articles from the NYT api to a function which updates our states
      			this.updateArchive();
	  		//makes sure the correct this is used
	    	}.bind(this));
	},
	render: function(){
		return(
			<div className = 'container'>
				<div className = 'row'>
					<div className = 'col-md-12'>
						<div className = 'component'>
							<h2>Archive:</h2>
							{this.state.data.map(function(article){
									return (
										<div className = 'singleArticle'>
											<div className= 'row buttonRow'>
												<div className = 'col-md-10'>
													<h3><li><a href={article.url}>{article.title}</a></li></h3>
												</div>
												<div className = 'col-md-2'>
													<button className = 'removeButton' onClick = {this.sendRemove} data-value={article._id}>Remove</button>
												</div>
											</div>
											<div className = 'row'>
												<div className = 'col-md-12'>
													<p>{article.description}</p>
												</div>
											</div>
										</div>
									)
								},this)}
						</div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Archive;