import React from 'react';
import Checkbox from './Checkbox'
import InputField from './InputField'

class EmailField extends React.Component {
	render() {
		if (this.props.shareEmail !== false) {
			return <InputField className="email-form" 
				               name="email" 
				               type="email" 
				               value={ this.props.email } 
				               onChange={ () => this.props.setEmail() } />;
		}
		return <Checkbox name='willpay' 
		                 value={ this.props.share }
		                 onChange = { () => this.props.setShareEmail() } />;
	}
}

export default EmailField;