import React, { useState } from 'react';
import InterestForm from './InterestForm';
import ClickGate from './ClickGate';

function RegisterInterest() {
	const interest_level = {0: <InterestForm />,
	                        1: <ClickGate />}
	return (
		<div className='column align-center'>
			<div className='column text-left'>
				<h3>I want to humiliate my enemies.</h3>
				<div className="m1 card-text-body">
				    And I'm willing to share personal information.
				</div>
				{interest_level[0]}
			</div>
		</div>
	)
}

export default RegisterInterest;