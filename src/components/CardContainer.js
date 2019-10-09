import React, { useState } from 'react';
import Card from './Card'

function CardContainer() {
	const cards = {0: [{color: 'green',
	                    headerText: 'Yes',
	                    bodyHeader: 'It was',
	                    bodyText: 'infuriating.',
	                    buttonText: 'Once.',
	                    targetCards : 1}, 
	                   {color: 'teal',
	                    headerText: 'Yes',
	                    bodyHeader: 'I know',
	                    bodyText: 'the patience of revenge.',
	                    buttonText: 'Many times.',
	                    targetCards : 2}, 
	                   {color: 'blue',
	                    headerText: 'No',
	                    bodyHeader: 'But,',
	                    bodyText: 'somehow.',
	                    buttonText: "I'm grumpy",
	                    targetCards : 3}],
	               1: [returnForgivenessCard(), 
	                   {color: 'teal',
	                    headerText: 'Infuriating',
	                    bodyHeader: "Doesn't quite",
	                    bodyText: 'cover the',
	                    buttonText: 'Feeling.',
	                    targetCards : 0}],
	               2: [returnForgivenessCard(), 
	                   {color: 'teal',
	                    headerText: 'This sounds',
	                    bodyHeader: "Serious.",
	                    bodyText: 'The only person I can control.',
	                    buttonText: 'Is myself.',
	                    targetCards : 3}],
                   3: [returnForgivenessCard(), 
                       {color: 'teal',
                        headerText: 'Infuriating',
                        bodyHeader: "Doesn't quite",
                        bodyText: 'cover the',
                        buttonText: 'Feeling.',
                        targetCards : 0}]};

    const onceOption = [];
    const [displayedCardIndex, setCard] = useState(0);

    function returnForgivenessCard(color) {
    	return {color: color ? color : 'green',
                headerText: 'Forgivness',
                bodyHeader: 'Might',
                bodyText: 'be.',
                buttonText: 'Best.',
                targetCards : 0};
    };

	return(
		<div className="cards-container row justify-center">
			{cards[displayedCardIndex].map((value, index) => {
				return <Card key={index} 
				             color={value.color} 
				             headerText={value.headerText} 
				             buttonText={value.buttonText} 
				             bodyHeader={value.bodyHeader}
				             bodyText={value.bodyText}
				             onClick = {() => setCard(value.targetCards)}/>
			})}
		</div>
	)
}

export default CardContainer;