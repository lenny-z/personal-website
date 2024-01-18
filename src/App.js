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
import expressLogo from './images/express-logo.png';
import javalinLogo from './images/javalin-logo.png';
import postgresqlLogo from './images/postgresql-logo.png';
import mysqlLogo from './images/mysql-logo.png';
import kerasLogo from './images/keras-logo.png';
import jupyterLogo from './images/jupyter-logo.png';
import gitLogo from './images/git-logo.png';
import nodeLogo from './images/node-logo.png';
import ubuntuLogo from './images/ubuntu-logo.png';

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
					<div id='hi-div'>
						<h1>Hi, I'm Lenny.</h1>
						<a href='https://github.com/lenny-z'>https://github.com/lenny-z</a>
						<a href='https://www.linkedin.com/in/langchunzhou/'>https://www.linkedin.com/in/langchunzhou/</a>
					</div>
				</div>
				<h1>Skills</h1>
				<h2>Languages</h2>
				<Skill name='C' image={cLogo} />
				<Skill name='C++' image={cppLogo} />
				<Skill name='Java' image={javaLogo} />
				<Skill name='Python' image={pythonLogo} />
				<Skill name='HTML' image={htmlLogo} />
				<Skill name='CSS' image={cssLogo} />
				<Skill name='JavaScript' image={javascriptLogo} />
				<Skill name='SQL' image={sqlLogo} />
				<hr />
				<h2>Libraries & Frameworks</h2>
				<Skill name='React' image={reactLogo} />
				<Skill name='Express' image={expressLogo} />
				<Skill name='Javalin' image={javalinLogo} />
				<hr />
				<h2>Databases</h2>
				<Skill name='PostgreSQL' image={postgresqlLogo} />
				<Skill name='MySQL' image={mysqlLogo} />
				<hr />
				<h2>Machine Learning</h2>
				<Skill name='Keras' image={kerasLogo} />
				<Skill name='Jupyter Notebook' image={jupyterLogo} />
				<hr />
				<h2>Version Control</h2>
				<Skill name='Git' image={gitLogo} />
				<hr />
				<h2>Environments</h2>
				<Skill name='Node.js' image={nodeLogo} />
				<Skill name='Ubuntu Linux' image={ubuntuLogo} />
				<hr />
				<p>This website is made with React and hosted with Nginx!</p>
			</main >
		</>
	);
}

export default App;
