import React from 'react';
import creepingItReal from '../img/creepingItReal.svg';

class Mean extends React.Component {
	render() {
		return(
			<img className="mean-image large-image" src={creepingItReal} alt={ "We all feel a little creepy sometimes, it'll pass." }/>
		)
	}
}

export default Mean;