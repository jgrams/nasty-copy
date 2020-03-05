import React from 'react';
import Label from './Label'

class EmailLabel extends React.Component {
	render() {
		if (this.props.shareEmail !== false) {
			return <Label text="Your Email:" className="email-label" htmlFor="email" />
		}
		return( <Label text="Do You Want To Hear Back?" className="checkbox-label" />)
	}
}

export default EmailLabel;