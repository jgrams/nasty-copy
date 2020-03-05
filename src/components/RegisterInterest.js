import React, { useState } from 'react';
import InterestForm from './InterestForm';
import ClickGate from './ClickGate';

function RegisterInterest() {
	const interest_level = {0: <InterestForm />,
	                        1: <ClickGate />}
	return (
		<div className='column bottom-margin'>
			{interest_level[0]}
		</div>
	)
}

export default RegisterInterest;