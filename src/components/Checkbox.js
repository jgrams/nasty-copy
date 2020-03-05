import React from 'react';

class Checkbox extends React.Component {
	render() {
	return(
		<input name={ this.props.name } 
		       type="checkbox"  
		       value={ this.props.value } 
		       onChange={ e => (this.props.onChange(e.target.checked)) } />	
		)
	}
}

export default Checkbox;