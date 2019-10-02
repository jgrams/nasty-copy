import React from 'react';
import Flower from './Flower'

class FlowerContainer extends React.Component {
	render() {
		return(
			<div className="flowers-container">
				<Flower />
			</div>
		)
	}
}

export default FlowerContainer;