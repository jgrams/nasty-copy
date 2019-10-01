import React from 'react';
import Card from './Card'

class CardContainer extends React.Component {
	render() {
		const colors = [{color: 'green',
	                     text: 'Once.',
	                     headerText: 'Yes'}, 
	                    {color: 'teal',
	                     text: 'Many times.',
	                     headerText: 'Yes'}, 
	                    {color: 'blue',
	                     text: "I'm grumpy",
	                     headerText: 'No'}];
		return(
			<div className="cards-container">
				{colors.map((value, index) => {
					return <Card key={index} color={value.color} text={value.text} headerText={value.headerText}/>
				})}
			</div>
		)
	}
}

export default CardContainer;