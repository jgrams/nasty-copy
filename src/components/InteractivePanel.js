import React from 'react';
import CardContainer from './CardContainer';

class InteractivePanel extends React.Component {
	render() {
		return(
			<div className='interactive-panel'>
				<CardContainer />
			</div>
		)
	}
}

export default InteractivePanel;