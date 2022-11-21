import './Result.css';

function Result(props) {
	return(
		<article className="result-wrapper">
			<h1>Results</h1>
			<div dangerouslySetInnerHTML={{__html: props.data}}></div>
		</article>
	);
}

export default Result;
