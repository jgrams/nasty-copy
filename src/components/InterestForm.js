import React from 'react'

function InterestForm () {
	function handleSubmit (e) {
		e.preventDefault()
		const data = new FormData(e.target) 
		var xhr = new XMLHttpRequest()
		xhr.open('POST', '/api/create', true)
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
		xhr.onreadystatechange = function() {
			if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {

			}
		}
		xhr.send(JSON.stringify(data))
	}

	return(
		<form onSubmit={handleSubmit} className="interest-form column align-center">
			<label htmlFor="email">Your Email:</label>
			<input name="email" type="email" />
			
			<label htmlFor="wrong">What's Wrong:</label>
			<input name="wrong" type="text" />
			
			<label htmlFor="willpay" >I Promise To Pay Money:</label>
			<input name="willpay" type="checkbox" />
			
			<button>Submit</button>
		</form>
	)
}

export default InterestForm;
