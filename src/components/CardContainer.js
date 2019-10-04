import React from 'react';
import Card from './Card'

class CardContainer extends React.Component {
	render() {
		const cards = [{color: 'green',
	                    headerText: 'Yes',
	                    bodyHeader: 'It was',
	                    bodyText: 'infuriating.',
	                    buttonText: 'Once.'}, 
	                   {color: 'teal',
	                    headerText: 'Yes',
	                    bodyHeader: 'I know',
	                    bodyText: 'the patience of revenge.',
	                    buttonText: 'Many times.'}, 
	                   {color: 'blue',
                        headerText: 'No',
                        bodyHeader: 'But,',
	                    bodyText: 'somehow.',
	                    buttonText: "I'm grumpy",}];
		return(
			<div className="cards-container">
				{cards.map((value, index) => {
					return <Card key={index} 
					             color={value.color} 
					             buttonText={value.buttonText} 
					             headerText={value.headerText} 
					             bodyHeader={value.bodyHeader}
					             bodyText={value.bodyText}/>
				})}
			</div>
		)
	}
}

export default CardContainer;