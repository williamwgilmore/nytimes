var React = require('react');

var Head = require('./components/Head');
var Search = require('./components/Search');
var Display = require('./components/Display');
var Archive = require('./components/Archive');

var helpers = require("./utils/helpers.js");


var Main = React.createClass({
	getInitialState: function(){
		return {searchTerm: 'Start', startYear: '', endYear: '', response: [''] }
	},
	passSearch: function(response) {
		console.log('Main response: ' + response)
    	this.setState({
    		response : response
    	});
    },

    componentDidUpdate: function(){
    	
    },
	render(){
		return (
			<div className = 'container'>
				<div className = 'row'>
					<div className = 'col-md-12'>
						<Head />
						<Search passSearch={this.passSearch} searchTerm={this.state.searchTerm} startYear={this.state.startYear} endYear={this.state.endYear} />
						<Display passResponse={[this.state.response]} />
						<Archive />
					</div>
				</div>
			</div>
		);
	}
})

module.exports = Main;