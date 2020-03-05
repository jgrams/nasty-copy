import React from 'react';

class Label extends React.Component {
	render() {
		return(
			<label className={this.props.className} htmlFor={this.props.htmlFor}>{this.props.text}</label>
		)
	}
}

export default Label;