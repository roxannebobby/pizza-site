import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import '../css/MenuItem.css';
import '../css/fonts.css';

export default function MenuItem(props) {
	const { img_URL, name, description, cuisine, category, price } = props;
	const { url } = useRouteMatch();

	return (
		<div className='items-list-wrapper'>
			<img className='items-list-image' src={item.img_URL} alt={item.name} />
			<p>{item.name}</p>
		</div>
	);
}
