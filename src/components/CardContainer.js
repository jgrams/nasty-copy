import React from 'react';
import Card from './Card'

class CardContainer extends React.Component {
	render() {
		const cards = [{color: 'green',
	                    text: 'Once.',
	                    headerText: 'Yes',
	                    bodyHeader: '',
	                    bodyText: ''}, 
	                   {color: 'teal',
	                    text: 'Many times.',
	                    headerText: 'Yes',
	                    bodyHeader: '',
	                    bodyText: ''}, 
	                   {color: 'blue',
	                    text: "I'm grumpy",
                        headerText: 'No',
                        bodyHeader: '',
	                    bodyText: ''}];
		return(
			<div className="cards-container">
				{cards.map((value, index) => {
					return <Card key={index} color={value.color} text={value.text} headerText={value.headerText}/>
				})}
			</div>
		)
	}
}

export default CardContainer;