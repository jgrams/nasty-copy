import React, { useState } from 'react';
import Card from './Card'

function CardContainer() {
	const cards = {0: [{color: 'green',
	                    headerText: 'Once',
	                    bodyHeader: 'It was',
	                    bodyText: 'infuriating.',
	                    buttonText: 'Yes.',
	                    targetCards : 1}, 
	                   {color: 'teal',
	                    headerText: 'Many times',
	                    bodyHeader: 'I know',
	                    bodyText: 'the patience of',
	                    buttonText: 'Revenge.',
	                    targetCards : 3}, 
	                   {color: 'blue',
	                    headerText: 'No',
	                    bodyHeader: 'But,',
	                    bodyText: 'somehow.',
	                    buttonText: "I'm grumpy",
	                    targetCards : 2}],
	               1: [returnForgivenessCard(), 
	                   {color: 'teal',
	                    headerText: 'Infuriating',
	                    bodyHeader: "Doesn't quite",
	                    bodyText: 'cover the',
	                    buttonText: 'Feeling.',
	                    targetCards : 2}],
	               2: [{color: 'teal',
	                    headerText: 'This sounds',
	                    bodyHeader: "Serious.",
	                    bodyText: 'The only person I can control.',
	                    buttonText: 'Is myself.',
	                    targetCards : 3},
	                    returnForgivenessCard()],
                   3: [returnForgivenessCard(),
                       {color: 'teal',
                        headerText: "I Can't",
                        bodyHeader: "Feel anything but anger",
                        bodyText: 'about my experience',
                        buttonText: 'Be Mean.',
                        targetCards : 0}]};
    const [displayedCardIndex, setCard] = useState(0);

    function returnForgivenessCard(color) {
    	return {color: color ? color : 'green',
                headerText: 'Forgiveness',
                bodyHeader: 'As Always,',
                bodyText: 'will be',
                buttonText: 'Best.',
                targetCards : 0};
    };

	return(
		<div className="cards-container switch justify-center align-center">
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