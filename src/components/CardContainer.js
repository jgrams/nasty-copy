import React, { useState } from 'react';
import Card from './Card'

function CardContainer() {
	const cards = {0: [{color: 'green',
	                    headerText: 'Yes',
	                    bodyHeader: 'It was',
	                    bodyText: 'infuriating.',
	                    buttonText: 'Once.',
	                    targetCardSet : 1}, 
	                   {color: 'teal',
	                    headerText: 'Yes',
	                    bodyHeader: 'I know',
	                    bodyText: 'the patience of revenge.',
	                    buttonText: 'Many times.',
	                    targetCardSet : 1}, 
	                   {color: 'blue',
	                    headerText: 'No',
	                    bodyHeader: 'But,',
	                    bodyText: 'somehow.',
	                    buttonText: "I'm grumpy",
	                    targetCardSet : 1}],
	               1: [{color: 'green',
	                     headerText: 'Forgivness',
	                     bodyHeader: 'Might',
	                     bodyText: 'be.',
	                     buttonText: 'Best.',
	                     targetCardSet : 0}, 
	                    {color: 'teal',
	                     headerText: 'Infuriating',
	                     bodyHeader: "Doesn't quite",
	                     bodyText: 'cover the',
	                     buttonText: 'Feeling.',
	                     targetCardSet : 0}]};

    const onceOption = [];
    const [displayedCard, setCard] = useState(0);
	return(
		<div className="cards-container flex-row flex-justify-center">
			{cards[displayedCard].map((value, index) => {
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

export default CardContainer;