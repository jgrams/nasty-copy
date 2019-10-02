import React from 'react';
import flower from '../flowers.jpg'

class Flower extends React.Component {
	render() {
		return(
			<div className="flower">
				<img src={flower}
			</div>
		)
	}
}

export default Flower;