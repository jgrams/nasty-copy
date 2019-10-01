import React from 'react';

class Card extends React.Component {
	render() {
		return(
			<div className='card-container'>
				<div className="card">
					<div className={this.props.color + " card-header"}>
						<text className="card-header-text">
							{this.props.headerText}
						</text>
					</div>
					<button className='card-button'>
						<text className={'card-button-text ' + this.props.color + '-text'}>
							{this.props.text}
						</text>
					</button>
				</div>
			</div>
		)
	}
}

export default Card;