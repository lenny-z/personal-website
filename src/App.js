import {Link} from 'react-router-dom';
import './Skill.js';
import './App.css';

function App() {
	return (
		<>
			<header>
				<nav className='header-nav'>
					<Link to='/'>lennyzhou.com</Link>
				</nav>
			</header>
			<main>
				Hello, world!
			</main>
		</>
	);
}

export default App;
