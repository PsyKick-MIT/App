import Header from "./header/Header";
import Logo from "./center/Logo";
import Result from "./result/Result";
import Contact from "./contact/Contact";
import About from "./about/About";

import './Main.css'
export default function Main() {

	const style = {
		background: "url(/background.svg) fixed",
		backgroundSize: "cover"
	};
	return (
		<main style={style} className="Main">
			<section id="main-1">
				<Header />
				<Logo />
			</section>
			<section id="result">
				<Result />
			</section>
			<section id="contact">
				<Contact />
			</section>
			<section id="about">
				<About />
			</section>
		</main>
	);


}