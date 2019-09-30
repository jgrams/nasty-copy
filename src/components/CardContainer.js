import React from 'react';
import Card from './Card'

class CardContainer extends React.Component {
	render() {
		const colors = [{color: 'green',
	                     text: 'Yes, once.'}, 
	                    {color: 'teal',
	                     text: 'Yes, many times.'}, 
	                    {color: 'blue',
	                     text: "No, I'm grumpy"}];
		return(
			<div className="card-container">
				{colors.map((value, index) => {
					return <Card key={index} color={value.color} text={value.text} />
				})}
			</div>
		)
	}
}

export default CardContainer;