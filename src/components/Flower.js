import React from 'react';

class Flower extends React.Component {
	render() {
		return(
			<img className="flower-image shrink" src={this.props.src} alt={this.props.altText}/>
		)
	}
}

export default Flower;