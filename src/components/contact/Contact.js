import './Contact.css'
export default function Contact() {
	return (
		<div className="form">
			<h1>Contact</h1>
			<form>
				<div>
					<label for="fname">First name:</label>
  					<input type="text" id="fname" name="fname" value="John"></input>
				</div>
				<div>
					<label for="lname">Last name:</label>
					<input type="text" id="lname" name="lname" value="Doe"></input>
				</div>
  				<input type="submit" value="Submit"></input>
			</form>
		</div>
	);
}