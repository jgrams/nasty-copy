import React from 'react';

class Flower extends React.Component {
	render() {
		return(
			<div className="flower">
				<img className="flower-image" src={this.props.src} altText={this.props.altText}/>
			</div>
		)
	}
}

export default Flower;