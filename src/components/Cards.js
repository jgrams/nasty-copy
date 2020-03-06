import React, { useState } from 'react';
import Card from './Card'
import Flower from './Flower'

function Cards(props) {
	const [cardSet, setCardSet] = useState(0);
	const card_settings = {0: [{color: 'green',
	                    headerText: 'Once',
	                    bodyHeader: 'It was',
	                    bodyText: 'infuriating.',
	                    buttonText: 'Yes.',
	                    transmitValue : 1,
	                    onClick: setCardSet}, 
	                   {color: 'teal',
	                    headerText: 'Many times',
	                    bodyHeader: 'I know',
	                    bodyText: 'the patience of',
	                    buttonText: 'Revenge.',
	                    transmitValue : 2,
	                    onClick: setCardSet}, 
	                   {color: 'blue',
	                    headerText: 'No',
	                    bodyHeader: 'But,',
	                    bodyText: 'somehow.',
	                    buttonText: "I'm Grumpy.",
	                    transmitValue : 2,
	                    onClick: setCardSet}],
	               1: [forgivenessCard(), 
	                   {color: 'teal',
	                    headerText: 'Infuriating',
	                    bodyHeader: "Doesn't quite",
	                    bodyText: 'cover the',
	                    buttonText: 'Feeling.',
	                    transmitValue : 2,
	                    onClick: setCardSet}],
	               2: [{color: 'teal',
	                    headerText: 'This sounds',
	                    bodyHeader: "Serious.",
	                    bodyText: 'The only person I can control.',
	                    buttonText: 'Is myself.',
	                    transmitValue : 3,
	                    onClick: setCardSet},
	                    forgivenessCard()],
                   3: [forgivenessCard(),
                       meanCard()]};

    function forgivenessCard(color) {
    	return {color: color ? color : 'green',
                headerText: 'Forgiveness',
                bodyHeader: 'As Always,',
                bodyText: 'will be',
                buttonText: 'Best.',
                onClick: props.setForgiveness,
                transmitValue: true };
    };

    function meanCard() {
    	return {color: 'teal',
                headerText: "I Can't",
                bodyHeader: "Feel anything but anger",
                bodyText: 'about my experience',
                buttonText: 'Be Mean.',
                onClick: props.setMean,
                transmitValue: true }
    };

    const cards = card_settings[cardSet].map((card) => 
  		<Card color={card.color} 
			  headerText={card.headerText} 			      
			  buttonText={card.buttonText} 
			  bodyHeader={card.bodyHeader}
			  bodyText={card.bodyText}
			  onClick={ () => card.onClick(card.transmitValue) } />
	);

	return(
		<div className={'switch center cards-container'} >
			{ cards }
		</div>
	)
}

export default Cards;