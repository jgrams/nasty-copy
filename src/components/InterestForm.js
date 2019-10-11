import React from 'react'

function InterestForm () {
	function handleSubmit (e) {
		e.preventDefault()
	}

	return(
		<form className="interest-form column align-center">
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
			<input type="submit" onClick={handleSubmit} value="Submit" />
		</form>
	)
}

export default InterestForm;
