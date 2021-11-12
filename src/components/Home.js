import React from 'react';
// We'll need React Router's own version of the History API
import { useHistory } from 'react-router-dom';
import '../css/Home.css';
import background from '../assets/img_pizza.jpg';
import '../css/fonts.css';

export default function Home() {
	const history = useHistory();
	const routeToMenu = () => {
		history.push('/items-list');
	};

	return (
		<div
			className='display-container'
			style={{ backgroundImage: `url(${background})` }}
		>
			<div className='bottom-left'>
				<span className='x-large-tag'>Open from 10am to 12pm</span>
			</div>

			<div className='w3-display-middle w3-center display-middle-font'>
				<span className='w3-text-white'>
					Casey's
					<br />
					PIZZA & PUB
				</span>
				<p>
					<button onClick={routeToMenu} className='button-xl-black'>
						Let me see the menu!
					</button>
				</p>
			</div>
		</div>
	);
}
