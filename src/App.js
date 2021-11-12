import './css/App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import './css/W3.css';

export default function App() {
	return (
		<div className='w3-content'>
			<h1>Build a Pizza</h1>
			<div class='w3-top w3-bar w3-xlarge w3-black w3-opacity-min'>
				<Header />
				<NavBar />
			</div>
		</div>
	);
}
