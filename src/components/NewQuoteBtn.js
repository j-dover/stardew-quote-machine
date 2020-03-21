import React, {Component} from 'react';

class NewQuoteBtn extends Component {
  render() {
    return (
      <button id='new-quote' onClick={this.props.getNewQuote}>New Quote</button>
    );
  }
}

export default NewQuoteBtn;
