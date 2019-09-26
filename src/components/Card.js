import React from 'react';

class Card extends React.Component {
	render() {
		return(
			<div className="card">
				<button className={this.props.color} >Yes, No</button>
			</div>
		)
	}
}

export default Card;