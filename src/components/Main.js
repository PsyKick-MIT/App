import Header from "./header/Header";
import Logo from "./center/Logo";
import Result from "./result/Result";
import Contact from "./contact/Contact";
import About from "./about/About";

import './Main.css'
import { useState } from "react";
export default function Main() {

	const [fetchedData, setFetchData] = useState([]);

	const style = {
		background: "url(/background.svg) fixed",
		backgroundSize: "cover"
	};
	return (
		<main style={style} className="Main">
			<section id="main-1">
				<Header />
				<Logo data={setFetchData}/>
			</section>
			<section id="result">
				<Result data={fetchedData}/>
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