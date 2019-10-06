import React from 'react';
import InterestForm from './InterestForm'

class RegisterInterest extends React.Component {
	render() {
		return (
			<div className='submit flex-align-center'>
				<h1>I want to humiliate my enemies.</h1>
				<h7>And I'm willing to share personal information.</h7>
				<InterestForm />
			</div>
		)
	}
}

export default RegisterInterest;