import React from 'react';
import CardContainer from './CardContainer';

class InteractivePanel extends React.Component {
	render() {
		return(
			<div className='interactive-panel item'>
				<h1>Welcome.</h1> 
				<h3>Has someone been mean to you?</h3>
				<CardContainer />
			</div>
		)
	}
}

export default InteractivePanel;