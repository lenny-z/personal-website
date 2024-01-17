import { Link } from 'react-router-dom';
import Skill from './Skill.js';
import './App.css';
import me from './images/me.jpg';
import cLogo from './images/c-logo.png';
import cppLogo from './images/cpp-logo.png';

function App() {
	return (
		<>
			<header>
				<nav className='header-nav'>
					<Link className='header-link' to='/'>lennyzhou.com</Link>
				</nav>
			</header>
			<main>
				<div id='intro-div'>
					<img id='me-img' src={me} />
					<div id='hi-div'>Hi, I'm Lenny.</div>
				</div>
				<div id='skills-div'>
					<h1>Skills</h1>
					<Skill name='C' image={cLogo} />
					<Skill name='C++' image={cppLogo} />
				</div>
			</main>
		</>
	);
}

export default App;
