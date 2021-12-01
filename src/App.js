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
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

      </header>
			<main className="App-main">
				<div id="quote-box">
					<div id="text">
						{quote.text}
					</div>
					<div id="author">
					{quote.author}
					</div>
					<button id="new-quote" onClick={changeQuote}>
						New Quote
					</button>
					<a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" id="tweet-quote" data-text={`${quote.text},${quote.author}`}data-show-count="false">
						{/* <button> */}
							Tweet-Quote
						{/* </button> */}
					</a>

				</div>
			</main>
    </div>
  );
}

export default App;
