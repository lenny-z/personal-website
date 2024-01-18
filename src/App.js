import { Link } from 'react-router-dom';
import Skill from './Skill.js';
import './App.css';
import me from './images/me.jpg';
import cLogo from './images/c-logo.png';
import cppLogo from './images/cpp-logo.png';
import javaLogo from './images/java-logo.png';
import pythonLogo from './images/python-logo.png';
import htmlLogo from './images/html-logo.png';
import cssLogo from './images/css-logo.png';
import javascriptLogo from './images/javascript-logo.png';
import sqlLogo from './images/sql-logo.png';
import reactLogo from './images/react-logo.png';

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
				<h1>Skills</h1>
				<h2>Languages</h2>
				{/* <div className='skills-div'> */}
				{/* <div className='skills-subdiv'> */}
				<Skill name='C' image={cLogo} />
				<Skill name='C++' image={cppLogo} />
				<Skill name='Java' image={javaLogo} />
				<Skill name='Python' image={pythonLogo} />
				<Skill name='HTML' image={htmlLogo} />
				<Skill name='CSS' image={cssLogo} />
				<Skill name='JavaScript' image={javascriptLogo} />
				<Skill name='SQL' image={sqlLogo} />
				{/* </div> */}
				{/* </div> */}
				<hr />
				<h2>Libraries & Frameworks</h2>
				<Skill name='React' image={reactLogo} />
				{/* </div> */}
			</main >
		</>
	);
}

export default App;
