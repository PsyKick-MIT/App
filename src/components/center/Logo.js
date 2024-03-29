import minicomputer from './mini-computer.svg'
import yogaslit from './yoga-slit.svg'
import { useState, useEffect } from "react";
import './Logo.css'

function Logo(props) {

	const [focus, setFocus] = useState("");
	const [input, setInput] = useState(0);
	const API = "https://psykick-api.onrender.com/"
	let logoCenter = document.querySelector(".logo-center > div");
	let searchBox = document.querySelector("#searchBox");
	let searchBtn = document.querySelector("#search-btn");

	const update = async (func) => {
		func("<h1 id=\"wait-text\"> Please Wait...</h1>");
		let search = searchBox.querySelector('input').value;
		let response = await fetch(API + "questions/" + search);
		searchBox.querySelector('input').value = "";
		setFocus(0);
		let jsonData = await response.json();
		let data = "";
		let ans = "";
		for (const entry of jsonData['questions']) {
			data += "<details>";
			data += "<summary>" + entry + "</summary>";
			response = await fetch(API + "answer/" + entry);
			let jsonData2 = await response.json();
			ans = jsonData2['answer'];
			data += "<p>" + ans + "<p>";
			data += "</details>";
			func(data);
		}
		console.log(data);

	}

	const btnStyle = {
		opacity: "0"
	};

	useEffect(() => {
		logoCenter = document.querySelector(".logo-center > div");
		searchBox = document.querySelector("#searchBox");
		searchBtn = document.querySelector("#search-btn");
		if (logoCenter == undefined || searchBox == undefined || searchBtn == undefined) return;
		if (!focus) {
			logoCenter.style.opacity = 1;
			searchBox.style.opacity = 0;
		} else if (input == "") {
			logoCenter.style.opacity = 1;
			searchBox.style.opacity = 0;
			searchBtn.style.opacity = 0;
		}

		if (input != "") {
			searchBtn.style.opacity = 1;
		}
	});
	return (
		<div className='logo-center-wrapper'>
			<div className='logo-center' id="logo-center"
				onMouseEnter={() => {
					logoCenter.style.opacity = 0;
					searchBox.style.opacity = 1;
				}}
				onMouseLeave={() => {

					if (!focus) {
						logoCenter.style.opacity = 1;
						searchBox.style.opacity = 0;
					} else if (input == "") {
						logoCenter.style.opacity = 1;
						searchBox.style.opacity = 0;
					}
				}}
			>
				<div>
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
				<div id="searchBox">
					<input onChange={(el) => {
						if (focus == 0) setFocus(1);
						setInput(el.target.value);
					}} type="text" placeholder='Search'></input>
					<button style={btnStyle} type="submit" onClick={() => { update(props.data); window.location.replace("/#result") }} id="search-btn">Solution!</button>
				</div>
			</div>

		</div>
	)
}
export default Logo;
