var React = require('react');

var Head = React.createClass({
	render: function(){
		return(
			<div className = 'container'>
				<div className = 'row'>
					<div className = 'col-md-12'>
						<div className = 'component text-center'>
							<h1>New York Times Database Search</h1>
						</div>
					</div>
				</div>
			</div>
		)
	}
})

module.exports = Head;