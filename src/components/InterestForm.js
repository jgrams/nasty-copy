import React from 'react'

class InterestForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {email: '',
	                  sitatuion: ''};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {

	}

	handleSubmit(event) {

	}

	render() {
		return(
			<form onSubmit={this.handleSubmit}>
				<label>
					Your Email:
					<input type="text" value={this.state.email} onChange={this.handleChange} />
				</label>
				<label>
					What's Wrong:
					<input type="text" value={this.state.situation} onChange={this.handleChange} />
				</label>
				<label>
					I Promise To Pay Money:
					<input type="checkbox" value={this.state.situation} onChange={this.handleChange} />
				</label>
				<input type="submit" value="Submit" />
			</form>
		)
	}
}

export default InterestForm;
