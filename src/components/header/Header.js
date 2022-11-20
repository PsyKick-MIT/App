import './Header.css'
import interLogo from './inter-logo.svg'

function Header() {
	return (
		<header>
			<span className='logo'>
				<h1>PS<br></br>YK</h1>
				<img src={interLogo} alt="logo"></img>
			</span>
			<ul>
				<li><a href="#contact">Contact</a></li>
				<li><a href="#about">About Us</a></li>
			</ul>
		</header>
	);
}

export default Header;