import React, { Component } from 'react';
import NewQuoteBtn from './NewQuoteBtn';
import TweetQuoteBtn from './TweetQuoteBtn';
import styles from './QuoteBox.module.css'

class QuoteBox extends Component {
	constructor(props) {
		super(props);
		this.state = {
			quote: '',
			villager_name: ''
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
				villager_name: villager_name
			});
		})
		.catch((error) => {
			let errorMessage = 'Error - ' + error;
			console.err(errorMessage);
			this.setState({
				quote: errorMessage,
				villager_name: ''
			});
		});

		console.log(this.state.quote);
  }

  componentDidMount() {
		this.handleNewQuote();
  }

	render() {
		const tweetUrl = "https://twitter.com/intent/tweet?text=";
		var tweetIntent = this.state.quote;
		tweetIntent = tweetIntent.split(" ").join("%20");
		tweetIntent = tweetUrl + '%22' + tweetIntent + '%22%20%2D%20' + this.state.villager_name + ", Stardew Valley";

		return (
			<div className={styles.quoteBox} id='quote-box'>
        <p className={styles.quoteText} id='text'>{'"' + this.state.quote + '"'}</p>
        <p className={styles.quoteAuthor} id='author'>{'- ' + this.state.villager_name}</p>
				<NewQuoteBtn getNewQuote={this.handleNewQuote}/>
				<TweetQuoteBtn tweetIntent={tweetIntent}/>
			</div>
		);
	}
}

export default QuoteBox;
