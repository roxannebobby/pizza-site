import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import '../css/MenuList.css';
import '../css/fonts.css';
import './MenuItem';
import { Cards } from 'react-bootstrap';

export default function MenuList(props) {
	const { menuItems } = props;
	const { url } = useRouteMatch();

	return (
		<div className='items-list-wrapper'>
			{menuItems.map((item) => (
				<div className='item-card' key={item.id}>
					<Link to={`${url}/${item.id}`}>
						<img
							className='items-list-image'
							src={item.img_URL}
							alt={item.name}
						/>
						<p>{item.name}</p>
					</Link>
				</div>
			))}
		</div>
	);
}
