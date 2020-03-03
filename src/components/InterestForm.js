import React, { useState } from 'react'

function InterestForm () {
	const [email, setEmail] = useState('');
	const [wrong, setWrong] = useState('');
	const [willpay, setWillPay] = useState(false);
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
		<form onSubmit={handleSubmit} className="interest-form grid">
			<label className="email-label" htmlFor="email">Your Email:</label>
			<input className="email-form" name="email" type="email" value={ email } onChange={ e => (setEmail(e.target.value)) } />
			<label htmlFor="wrong">What's Wrong:</label>
			<textarea name="wrong" type="text" value={ wrong } onChange={ e => (setWrong(e.target.value)) } />
			<label htmlFor="willpay" >I Promise To Consider Paying Money:</label>
			<input name="willpay" type="checkbox"  value={ willpay } onChange={ e => (setWillPay(e.target.checked)) } />
			<button>Submit</button>
		</form>
	)
}

export default InterestForm;
