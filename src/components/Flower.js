import React from 'react';
import redflower from '../img/flowers/red_flower.svg';
import blueflower from '../img/flowers/blue_flower.svg';
import cactusflower from '../img/flowers/cactus_flower.svg';
import orangeflower from '../img/flowers/orange_flower.svg';
import purpleflower from '../img/flowers/purple_flower.svg';
import pinkflower from '../img/flowers/pink_flower.svg';

class Flower extends React.Component {
	render() {
		const flowers = [{src: redflower,
		                  altText: "Red"},
		                 {src: blueflower,
		                  altText: "Blue"},
		                 {src: cactusflower,
		                  altText: "Cactus"},
		                 {src: orangeflower,
		                  altText: "Orange"},
		                 {src: purpleflower,
		                  altText: "Purple"},
		                 {src: pinkflower,
		                  altText: "Pink"}];
		const min = Math.ceil(0);
		const max = Math.floor(flowers.length);
		
		// Thank you Mozilla Developer Network
		function getRandomFlowerIndex() {
		  //The maximum is exclusive and the minimum is inclusive
		  return Math.floor(Math.random() * (max - min)) + min;
		}
		var flower = flowers[getRandomFlowerIndex()];
		return(
			<img className="flower-image" src={flower.src} alt={flower.altText}/>
		)
	}
}

export default Flower;