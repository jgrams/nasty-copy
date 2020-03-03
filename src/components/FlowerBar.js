import React from 'react';
import Flower from './Flower'

class FlowerBar extends React.Component {
	render() {
		const numberFlowers = 7;
		var displayFlowers = [];
		for (let i = numberFlowers - 1; i >= 0; i--) {
			displayFlowers.push(<Flower key={i} />)
		}

		return(
			<div className="flowers-container row align-center justify-center" >
			    {displayFlowers}
			</div>
		)
	};
}

export default FlowerBar;