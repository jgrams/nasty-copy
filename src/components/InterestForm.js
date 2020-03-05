import React, { useState } from 'react'
//import EmailField from './EmailField'
import Checkbox from './Checkbox'
import EmailLabel from './EmailLabel'
import EmailField from './EmailField'


function InterestForm () {
	const [email, setEmail] = useState('');
	const [wrong, setWrong] = useState('');
	const [submitted, setSubmitted] = useState(false);
	const [shareEmail, setShareEmail] = useState(false);

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
		                             "wrong": wrong}))
		}
	}

	return(
		<div className='column text-left'>
			<h3>I've thought about humiliating my enemies.</h3>
			<div className="card-text-body">
			    I want to tell someone about it.
			</div>
			<form onSubmit={handleSubmit} className="interest-form grid margin-top">
				<label htmlFor="wrong">What's Wrong:</label>
				<textarea name="wrong" type="text" value={ wrong } onChange={ e => (setWrong(e.target.value)) } />
				<EmailLabel shareEmail={shareEmail} />
				<EmailField shareEmail={shareEmail} 
							email = {email}
				            setShareEmail = { () => setShareEmail() }
				            setEmail = { () => setEmail() } />
				<button>Submit</button>
			</form>
		</div>
	)
}

export default InterestForm;
