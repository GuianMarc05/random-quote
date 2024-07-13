import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
	const [quote, setQuote] = useState('');
	const [author, setAuthor] = useState('');

	//https://api.quotable.io/random

	useEffect(() => {
		fetch('https://api.quotable.io/random')
			.then((res) => res.json())
			.then((quote) => {
				setQuote(quote.content);
				setAuthor(quote.author);
			});
	}, []);

	let fetchNewQuote = () => {
		fetch('https://api.quotable.io/random')
			.then((res) => res.json())
			.then((quote) => {
				setQuote(quote.content);
				setAuthor(quote.author);
			});
	};

	return (
		<div>
			<h1>Random Quote Generator</h1>
			<div className="container">
				<div className="quote">" {quote} "</div>
				<div>
					<div className="line"></div>
					<div className="bottom">
						<div className="author">- {author}</div>
						<div className="button" onClick={fetchNewQuote}>
							<button>Generate Quote</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
