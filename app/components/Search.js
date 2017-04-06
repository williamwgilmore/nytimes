var React = require('react');
var helpers = require("../utils/helpers.js");


var Search = React.createClass({
	getInitialState: function(){
		return {clicks: 0}
	},

	handleSearchTerm: function(e){
		this.setState({searchTerm: e.target.value});
	},
	handleStartYear: function(e){
		this.setState({startYear: e.target.value});
	},
	handleEndYear: function(e){
		this.setState({endYear: e.target.value});
	},

	handleClick: function() {
    	helpers.sendQuery(this.state.searchTerm, this.state.startYear, this.state.endYear)
      	.then(function(response) {
	        
	        this.props.passSearch({
	        	response: response
	        });
	      
	        console.log('Successful search');
	    }.bind(this));
  	},

	render: function(){
		return(
			<div className = 'container'>
				<div className = 'row'>
					<div className = 'col-md-12'>
						<div className = 'jumbotron'>
							<form>
  								<div className="form-group">
    								<label>Search Term:</label>
    								<input type="text" onChange={this.handleSearchTerm} className="form-control" placeholder="Search for..." />
  								</div>
  								<div className="form-group">
    								<label>Start Year:</label>
    								<input type="text" onChange={this.handleStartYear} className="form-control" placeholder="Default 2000" />
  								</div>
  								<div className="form-group">
    								<label>End Year:</label>
    								<input type="text" onChange={this.handleEndYear} className="form-control" placeholder="Default 2017" />
  								</div>
    							<button type="button" className="btn btn-primary pull-right"
    							onClick={this.handleClick}>Submit</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Search;