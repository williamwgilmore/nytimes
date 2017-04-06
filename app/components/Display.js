var React = require('react');

var Display = React.createClass({
	getInitialState: function(){
		return {html: ''}
	},
	componentWillUpdate: function(){
		// console.log(this.props.passResponse);
		// this.setState({
		// 	html: this.props.passResponse[0].headline.main
		// });
	},
	render: function(){
		return(
			<div className = 'container'>
				<div className = 'row'>
					<div className = 'col-md-12'>
						<div className = 'jumbotron'>
							{this.state.html}
						</div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Display;