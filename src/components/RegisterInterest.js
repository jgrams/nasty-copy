import React from 'react';
import InterestForm from './InterestForm'

class RegisterInterest extends React.Component {
	render() {
		return (
			<div className='submit align-center'>
				<h1>I want to humiliate my enemies.</h1>
				<h6>And I'm willing to share personal information.</h6>
				<InterestForm />
			</div>
		)
	}
}

export default RegisterInterest;