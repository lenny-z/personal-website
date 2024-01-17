import { Link } from 'react-router-dom';
import './Skill.js';
import './App.css';
import me from './images/me.jpg';

function App() {
	return (
		<>
			<header>
				<nav className='header-nav'>
					<Link className='header-link' to='/'>lennyzhou.com</Link>
				</nav>
			</header>
			<main>
				<img id='me-img' src={me} />
			</main>
		</>
	);
}

export default App;
