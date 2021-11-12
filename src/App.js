import React, { useState, useEffect } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import './css/App.css';
import './css/fonts.css';

import Home from './components/Home';
import MenuList from './components/MenuList';
import MenuItem from './components/MenuItem';
import Contact from './components/Contact';

// Dummy data
import data from './assets/data';

function fetchFoodItems() {
	// simulate getting data through axios
	return Promise.resolve({ success: true, data });
}

export default function App(props) {
	const [menuItems, setMenuItems] = useState([]);

	useEffect(() => {
		fetchFoodItems().then((res) => setMenuItems(res.data));
	}, []);

	return (
		<div className='App'>
			<nav>
				<div className='w3-top w3-bar w3-xlarge w3-black w3-opacity-min'>
					<Link to='./' className='w3-bar-item w3-button'>
						HOME
					</Link>
					<Link to='./items-list' className='w3-bar-item w3-button'>
						MENU
					</Link>
					<Link to='./contact' className='w3-bar-item w3-button'>
						CONTACT
					</Link>
				</div>
			</nav>

			{/* 👉 STEP 4 - Build a Switch with a Route for each of the components imported at the top */}
			<Switch>
				<Route path='/items-list/:itemId'>
					<MenuItem menuItems={menuItems} />
				</Route>
				<Route path='/items-list'>
					<MenuList menuItems={menuItems} />
				</Route>
				<Route path='/contact'>
					<Contact />
				</Route>
				<Route path='/'>
					<Home />
				</Route>
			</Switch>
		</div>
	);
}
