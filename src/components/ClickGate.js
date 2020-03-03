import React, { useState } from 'react'

function ClickGate () {
	return(
		<div className="column gateholder">
			<button className="gate tall-line">Tell Me More</button>
			<button className="gate tall-line">I'm Not Interested</button>
		</div>
	)
}

export default ClickGate;
