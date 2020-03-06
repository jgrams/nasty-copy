import React from 'react';
import unicorn from '../img/unicorn.svg';

class Forgiveness extends React.Component {
	render() {
		return(
			<img className="forgiveness-image large-image" src={unicorn} alt={ 'The radiant unicorn of forgiveness lightly prances toward you.' }/>
		)
	}
}

export default Forgiveness;