import React from 'react';

class Card extends React.Component {
	render() {
		return(
				<div className="card flex-column flex-align-center">
					<div className={this.props.color + " card-header"} alt="Square Button">
						<text className="card-header-text tall-line">
							{this.props.headerText}
						</text>
					</div>
					<div className='card-text-header'>
						{this.props.bodyHeader}
					</div>
					<div className='card-text-body'>
						{this.props.bodyText}
					</div>
					<button className='card-button'>
						<text className={'card-button-text tall-line ' + this.props.color + '-text'}>
							{this.props.buttonText}
						</text>
					</button>
				</div>
		)
	}
}

export default Card;