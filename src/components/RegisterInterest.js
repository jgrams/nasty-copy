import React, { useState } from 'react';
import InterestForm from './InterestForm';
import ClickGate from './ClickGate';

function RegisterInterest() {
	const interest_level = {0: <InterestForm />,
	                        1: <ClickGate />}
	return (
		<div className='submit column align-center'>
			<h3>I want to humiliate my enemies.</h3>
			<h6>And I'm willing to share personal information.</h6>
			{interest_level[1]}
		</div>
	)
}

export default RegisterInterest;