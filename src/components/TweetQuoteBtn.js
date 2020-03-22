import React, {Component} from 'react';
import styles from './TweetQuoteBtn.module.css'
class TweetQuoteBtn extends Component {
  render() {
    return (
      <a id="tweet-quote" className={styles.twitterShareButton}
  href={this.props.tweetIntent} target="_blank" rel="noopener noreferrer">
Tweet Quote</a>
    );
  }
}

export default TweetQuoteBtn;
