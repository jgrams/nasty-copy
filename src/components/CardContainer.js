import React from 'react';
import Card from './Card'

class CardContainer extends React.Component {
	render() {
		const colors = ['green', 'teal', 'blue'];
		return(
			<div className="card-container">
				{colors.map((value, index) => {
					return <Card key={index} color={value} />
				})}
			</div>
		)
	}
}

export default CardContainer;