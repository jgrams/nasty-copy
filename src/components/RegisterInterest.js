import React, { useState, useEffect } from 'react';
import InterestForm from './InterestForm';

function RegisterInterest() {
	const [isVisible, setIsVisible] = useState(true);
	const [exists, setExists] = useState(true);

	useEffect(() => {
		if (!isVisible) setTimeout(() => {  setExists(false); }, 1670);
  	});

	if (!exists) {
		return(<div className={'an-empty-graveyard-stirs-as-we-carelessly-stomp-through-the-underbrush'}></div>)
	}
	return (
		<div className={`column bottom-margin ${ isVisible ? "" : " fade"}`}>
			<InterestForm setIsVisible = { () => setIsVisible() }/>
		</div>
	)
}

export default RegisterInterest;