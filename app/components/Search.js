var React = require('react');

var Search = React.createClass({
	// getInitialState: function(){
	// },

	handleSearchTerm: function(e){
		this.setState({searchTerm: e.target.value});
	},
	handleStartYear: function(e){
		this.setState({startYear: e.target.value});
	},
	handleEndYear: function(e){
		this.setState({endYear: e.target.value});
	},

	handleClick: function(){
		this.props.passSearch(this.state.searchTerm, this.state.startYear, this.state.endYear)
	},

	render: function(){
		return(
			<div className = 'container'>
				<div className = 'row'>
					<div className = 'col-md-12'>
						<div className = 'component clearfix'>
							<h2>Search:</h2>
							<form>
  								<div className="form-group">
    								<input type="text" onChange={this.handleSearchTerm} className="form-control" placeholder="Keywords" />
  								</div>
  								<div className="form-group">
    								<input type="text" onChange={this.handleStartYear} className="form-control" placeholder="Start year (2000)" />
  								</div>
  								<div className="form-group">
    								<input type="text" onChange={this.handleEndYear} className="form-control" placeholder="End year (2017)" />
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