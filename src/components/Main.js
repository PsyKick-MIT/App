import Header from "./header/Header";
import Logo from "./center/Logo";
import './Main.css'
export default function Main() {
	const style = {
		backgroundImage: "url(/background.png)",
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
	};
	return (
		<div style={style} className="Main">
			<Header />
			<Logo />
		</div>
	);
}