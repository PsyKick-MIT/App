import './Header.css'
import interLogo from './inter-logo.svg'

function Header() {
	return (
		<header>
			<span className='logo'>
				<h1>PS<br></br>YK</h1>
				<img src={interLogo}></img>
			</span>
			<ul>
				<li><a href="#">Contact</a></li>
				<li><a href="#">About Us</a></li>
			</ul>
		</header>
	);
}

export default Header;