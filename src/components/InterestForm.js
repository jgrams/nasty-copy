import React from 'react'

class InterestForm extends React.Component {
	render() {
		return(
			<form className="interest-form column align-center" onSubmit="return false">
				<label>
					Your Email:
					<input type="text" />
				</label>
				<label>
					What's Wrong:
					<input type="text" />
				</label>
				<label>
					I Promise To Pay Money:
					<input type="checkbox" />
				</label>
				<input type="submit" action="/api/post" method="POST" value="Submit" />
			</form>
		)
	}
}

export default InterestForm;
