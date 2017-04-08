var React = require('react');
//query to nyt api
var helpers = require("../utils/helpers.js");

var Display = React.createClass({
	getInitialState: function(){
		//data is used to hold the array of documents the nyt api sends
		//lastSearch saves the last search term sent to the component, so that we don't resend a query
		return {data: [], lastSearch: '', lastStart:'', lastEnd:''}
	},

	displayResults: function(data, search, start, end){
		//sets states after they are returned
		this.setState({
			data: data,
			lastSearch: search,
			lastStart: start,
			lastEnd: end
		})
	},

	componentDidUpdate: function(){
		//if the search variables have not changed, we don't need to send a new query
		if ((this.props.searchTerm != this.state.lastSearch) && (this.props.startYear != this.state.lastSearch) && (this.props.endYear != this.state.end)){
			//we send the updated query to the helper utility, which runs the query
			helpers.sendQuery(this.props.searchTerm, this.props.startYear, this.props.endYear)
      		.then(function(response){
      			//we then pass the articles from the NYT api to a function which updates our states
      			this.displayResults(response.data.response.docs, this.props.searchTerm, this.props.startYear, this.props.endYear);
	  		//makes sure the correct this is used
	    	}.bind(this));
	    }
	},

	sendInfo(event){
		//Use the id of the article to find the index of that article
		var index = event.target.getAttribute('data-value');
		//loop through until we hit a match on the id
		for(var i=0; i<this.state.data.length; i++){
			//when the id matches the id we sent, set the index to that number and stop searching
			if (this.state.data[i]._id === index){
				index = i;
				break;
			}
		}
		//pass the article info to Main.js, this will allow Main to send it to Archive.js
		this.props.passArticle(this.state.data[index].headline.main, this.state.data[index].web_url, this.state.data[index].lead_paragraph);
	},
	
	render: function(){
		return(
			<div className = 'container'>
				<div className = 'row'>
					<div className = 'col-md-12'>
						<div className = 'component'>
						<h2>Results:</h2>
							<ol>
								{/*when data is filled, we'll loop through and generate
								the html for each article*/}
								{this.state.data.map(function(article){
									return (
										<div className = 'singleArticle'>
											<div className= 'row buttonRow'>
												<div className = 'col-md-11'>
													<h3><li><a href={article.web_url}>{article.headline.main}</a></li></h3>
												</div>
												<div className = 'col-md-1'>
													<button className = 'saveButton' onClick = {this.sendInfo} data-value={article._id}>Save</button>
												</div>
											</div>
											<div className = 'row'>
												<div className = 'col-md-12'>
													<p>{article.lead_paragraph}</p>
												</div>
											</div>
										</div>
									)
								},this)}
							</ol>
						</div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Display;