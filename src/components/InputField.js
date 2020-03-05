import React from 'react';

class InputField extends React.Component {
	render() {
		return(
			<input className={this.props.className} 
			       name={this.props.name} 
			       type={this.props.type} 
			       value={ this.props.value } 
			       onChange={ e => (this.props.onChange(e.target.value)) } />
		)
	}
}

export default InputField;