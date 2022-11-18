import minicomputer from './mini-computer.svg'
import yogaslit from './yoga-slit.svg'

import './Logo.css'

function Logo() {
	return (
		<div className='logo-center-wrapper'>
			<div className='logo-center'>
				<img src={yogaslit} alt="Statue" id="logo-yoga"></img>
				<h1>
					PSY
				</h1>
				<div className='main-wrapper-bottom'>
					<div className='computer-wrapper'>
						<img src={minicomputer} alt="system" id="computer"></img>
					</div>
					<h1>
						KICK
					</h1>
				</div>
			</div>
		</div>
	)
}
export default Logo;