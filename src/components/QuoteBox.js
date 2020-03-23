import React, { Component } from 'react';
import NewQuoteBtn from './NewQuoteBtn';
import TweetQuoteBtn from './TweetQuoteBtn';
import styles from './QuoteBox.module.css'

class QuoteBox extends Component {
	constructor(props) {
		super(props);
		this.state = {
			quote: '',
			villager_name: '',
			errorMessage: '',
			error: false
		};
    this.handleNewQuote = this.handleNewQuote.bind(this);
	}
  handleNewQuote() {
    fetch('https://random-stardew-quote.glitch.me/api/quote')
		.then((res) => {
			return res.json();
		})
		.then((data) => {
			let quote = data.random_quote.quote;
			let villager_name = data.random_quote.villager_name;
			this.setState({
				quote: quote,
				villager_name: villager_name,
				errorMessage: '',
				error: false
			});
			console.log('Quote: ' + quote + "\nAuthor: " + villager_name);
		})
		.catch((error) => {
			let errorMessage = 'Error - ' + error;
			console.error(errorMessage);
			this.setState({
				quote: '',
				villager_name: '',
				errorMessage: errorMessage,
				error: true
			});
		});
  }

  componentDidMount() {
		this.handleNewQuote();
  }

	render() {
		const tweetUrl = "https://twitter.com/intent/tweet?text=";
		var tweetIntent = this.state.quote;
		tweetIntent = tweetIntent.split(" ").join("%20");
		tweetIntent = tweetUrl + '%22' + tweetIntent + '%22%20%2D%20' + this.state.villager_name + ", Stardew Valley";

		let newQuoteBtn = <NewQuoteBtn getNewQuote={this.handleNewQuote}/>;
		let tweetQuoteBtn = <TweetQuoteBtn tweetIntent={tweetIntent}/>;

		return (
			<div className={styles.quoteBox} id='quote-box'>
        <p className={styles.quoteText} id='text'>{this.state.error ? this.state.errorMessage : this.state.quote !== '' ? '"' + this.state.quote + '"' : ''}</p>
        <p className={styles.quoteAuthor} id='author'>{this.state.error ? "" : this.state.author !== '' ? '- ' + this.state.villager_name : ''}</p>
				{this.state.author !== '' ? newQuoteBtn : ''}
				{this.state.author !== '' ? tweetQuoteBtn : ''}

			</div>
		);
	}
}

export default QuoteBox;
