import React, { Component } from 'react';
import NewQuoteBtn from './NewQuoteBtn';

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
		return (
			<div>
				{/* Text */}
        <div id='text'>
          <p>{this.state.quote}</p>
        </div>
				{/* Author */}
        <div id='author'>
          <p>{this.state.villager_name}</p>
        </div>
				{/* New-Quote Button */}
				<NewQuoteBtn getNewQuote={this.handleNewQuote}/>
				{/* Tweet-quote Button */}
			</div>

		);
	}
}

export default QuoteBox;
