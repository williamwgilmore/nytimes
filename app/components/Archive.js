var React = require('react');

var Archive = React.createClass({
	render: function(){
		return(
			<div className = 'container'>
				<div className = 'row'>
					<div className = 'col-md-12'>
						<div className = 'jumbotron'>
							<p>Title:</p>
							<p>TitleText</p>
							<p>Body:</p>
							<p>BodyText</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Archive;