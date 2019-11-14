import React, { useState } from 'react'

function InterestForm () {
	const [email, setEmail] = useState('');
	const [wrong, setWrong] = useState('');
	const [willpay, setWillPay] = useState(0);

	function handleSubmit (e) {
		e.preventDefault()
		console.log(e.target)
		var xhr = new XMLHttpRequest();
		const data = new FormData(e.target)
		console.log(data);
		xhr.open('POST', '/api/create', true);
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
		xhr.onreadystatechange = function() {
			if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
				
			}
		}
		xhr.send(JSON.stringify(data))
	}

	return(
		<form onSubmit={handleSubmit} className="interest-form column align-center">
			<div className="row">
				<label htmlFor="email">Your Email:</label>
				<input name="email" type="email" value={ email } onChange={ e => (setEmail(e.target.value)) } />
			</div>
			<div className="row">
				<label htmlFor="wrong">What's Wrong:</label>
				<input name="wrong" type="text" value={ wrong } onChange={ e => (setWrong(e.target.value)) } />
			</div>
			<div className="row">
				<label htmlFor="willpay" >I Promise To Pay Money:</label>
				<input name="willpay" type="checkbox"  value={ willpay } onChange={ e => (setWillPay(e.target.value)) } />
			</div>
			<button>Submit</button>
		</form>
	)
}

export default InterestForm;
