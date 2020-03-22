import React, {Component} from 'react';
import styles from './NewQuoteBtn.module.css'

class NewQuoteBtn extends Component {
  render() {
    return (
      <button className={styles.newQuote} id='new-quote' onClick={this.props.getNewQuote}>New Quote</button>
    );
  }
}

export default NewQuoteBtn;
