import React from 'react';

class Card extends React.Component {
	render() {
		return(
			<div className="card">
				<button className={this.props.color + ' card-button'}>
					{this.props.text}
				</button>
			</div>
		)
	}
}

export default Card;