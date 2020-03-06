import React, { useState } from 'react';
import Cards from './Cards'
import Forgiveness from './Forgiveness'
import Mean from './Mean'

function CardContainer(props) {
	const [forgiveness, setForgiveness] = useState(false);
	const [mean, setMean] = useState(false);

	function getImage() {
		if (forgiveness !== false) { return < Forgiveness />; }
		if (mean !== false) { return < Mean />; }
	    return <Cards setForgiveness= { () => setForgiveness() }
	                  setMean = { () => setMean() }/>;
	}

	return(
		<div className="flex justify-center align-center">
			{ getImage() }
		</div>
	)
}

export default CardContainer;