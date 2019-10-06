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
	                    buttonText: "I'm grumpy"}];

	    const onceOption = [{color: 'green',
	                    headerText: 'Forgivness',
	                    bodyHeader: 'Might',
	                    bodyText: 'be.',
	                    buttonText: 'Best.'}, 
	                   {color: 'teal',
	                    headerText: 'Infuriating',
	                    bodyHeader: "Doesn't quite",
	                    bodyText: 'cover the',
	                    buttonText: 'Feeling.'}];
		return(
			<div className="cards-container flex-row flex-justify-center">
				{cards.map((value, index) => {
					return <Card key={index} 
					             color={value.color} 
					             headerText={value.headerText} 
					             buttonText={value.buttonText} 
					             bodyHeader={value.bodyHeader}
					             bodyText={value.bodyText}/>
				})}
			</div>
		)
	}
}

export default CardContainer;