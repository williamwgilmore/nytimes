var React = require('react');

var Head = require('./components/Head');
var Search = require('./components/Search');
var Display = require('./components/Display');
var Archive = require('./components/Archive');

var helpers = require("./utils/helpers.js");


var Main = React.createClass({
	getInitialState: function(){
		return {searchTerm: '',
				startYear: '',
				endYear: '',
				articleTitle: '',
				articleUrl: '',
				articleDescription: ''
			}
	},

    passSearch: function(term, start, end){
    	this.setState({
          searchTerm: term,
          startYear: start,
          endYear: end
        });
    },

    passArticle: function(title, url, description, id){
    	this.setState({
    		articleTitle: title,
    		articleUrl: url,
    		articleDescription: description
    	})
    },

	render(){
		return (
			<div className = 'container'>
				<div className = 'row'>
					<div className = 'col-md-12'>
						<Head />
						<Search passSearch={this.passSearch} />
						<Display passArticle={this.passArticle} searchTerm={this.state.searchTerm} startYear={this.state.startYear} endYear={this.state.endYear} />
						<Archive title={this.state.articleTitle} url={this.state.articleUrl} description={this.state.articleDescription} id={this.state.id}/>
					</div>
				</div>
			</div>
		);
	}
})

module.exports = Main;