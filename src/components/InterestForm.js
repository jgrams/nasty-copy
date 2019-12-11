import React, { useState } from 'react'

function InterestForm () {
	const [email, setEmail] = useState('');
	const [wrong, setWrong] = useState('');
	const [willpay, setWillPay] = useState(0);
	const [submitted, setSubmitted] = useState(false);

	function handleSubmit (e) {
		e.preventDefault()
		if (!submitted) {
			var xhr = new XMLHttpRequest();
			xhr.open("POST", "/api/create", true);
			xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
			xhr.onreadystatechange = function() {
				if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
					setSubmitted(true)
				}
			}
			xhr.send(JSON.stringify({"email": email,
		                             "wrong": wrong,
		                             "willpay": willpay}))
		}
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
				<input name="willpay" type="checkbox"  value={ willpay } onChange={ e => (setWillPay(e.target.checked)) } />
			</div>
			<button>Submit</button>
		</form>
	)
}

export default InterestForm;
