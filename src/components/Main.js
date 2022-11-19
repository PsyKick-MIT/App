import Header from "./header/Header";
import Logo from "./center/Logo";
import './Main.css'
export default function Main() {
	const style = {
		background: "url(/background.svg) fixed",
		backgroundSize: "cover"
	};
	return (
		<div style={style} className="Main">
			<Header />
			<Logo />
		</div>
	);
}