import '../css/Header.css';
import '../css/W3.css';

export default function Header() {
	return (
		<div className='w3-display-container w3-grayscale-min'>
			<div className='w3-display-bottomleft'>
				<span className='w3-tag w3-xlarge'>Open from 10am to 12pm</span>
			</div>

			<div className='w3-display-middle w3-center'>
				<span className='w3-text-white'>
					thin
					<br />
					CRUST PIZZA
				</span>
				<p>
					<a href='#menu' className='w3-button w3-xxlarge w3-black'>
						Let me see the menu
					</a>
				</p>
			</div>
		</div>
	);
}
