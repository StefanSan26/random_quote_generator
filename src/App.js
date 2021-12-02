import {useState} from 'react'
// import logo from './logo.svg';
import './App.css';
import quotes from './initialState';

function App() {
	let randomNumber = Math.floor((Math.random() * 8));
	const [quote, setQuote] = useState(quotes[randomNumber])

	function changeQuote(params) {
		randomNumber = Math.floor((Math.random() * 8));
		setQuote(quotes[randomNumber])
		console.log(randomNumber)
	}
  return (
    <div className="App">
      <header className="App-header">
     

      </header>
			<main className="App-main">
				<div id="quote-box">
					<div id="text">
						{quote.text}
					</div>
					<div id="author">
					"{quote.author}"
					</div>
					<button id="new-quote" onClick={changeQuote}>
						New Quote
					</button>
					<a href={`https://twitter.com/intent/tweet?&text=${quote.text} + "${quote.author}"`}>
						<button>
							Tweet-Quote
						</button>
				
						
					</a>

				</div>
			</main>
    </div>
  );
}

export default App;
