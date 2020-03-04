import React, { useState } from 'react';
import InterestForm from './InterestForm';
import ClickGate from './ClickGate';

function RegisterInterest() {
	const interest_level = {0: <InterestForm />,
	                        1: <ClickGate />}
	return (
		<div className='column bottom-margin'>
			<div className='column text-left'>
				<h3>I want to humiliate my enemies.</h3>
				<div className="card-text-body">
				    I want to tell someone about it.
				</div>
				{interest_level[0]}
			</div>
		</div>
	)
}

export default RegisterInterest;