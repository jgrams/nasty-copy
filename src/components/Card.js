import React from 'react';

class Card extends React.Component {
	render() {
		return(
				<div className="card column margin-top align-center">
					<div className={this.props.color + " card-header"} alt="Square Button">
						<div className="card-header-text tall-line">
							{this.props.headerText}
						</div>
						</div>
						<div className='card-text-header'>
							{this.props.bodyHeader}
						</div>
						<div className='card-text-body'>
							{this.props.bodyText}
						</div>
						<button className='card-button' onClick={this.props.onClick}>
							<div className={'card-button-text tall-line ' + this.props.color + '-text'}>
								{this.props.buttonText}
							</div>
						</button>
				</div>
		)
	}
}

export default Card;