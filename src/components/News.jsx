import React, { Component } from 'react';

import superagent from 'superagent';

import styles from '../styles/news.module.scss';

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sources: null
    };
  }

  getSources() {
    let url =
      "https://newsapi.org/v2/sources?apiKey=c368def711764ab39635b5de1e142b14";
    superagent.get(url).then(results => {
      this.setState({ sources: results.body.sources });
      console.log(results.body);
    });
    console.log(this.state);
  }

  componentWillMount() {
    this.getSources();
  }

  render() {
    if (this.state.sources) {
      return (
        <div className={styles.news}>
          <h1>News</h1>
            {this.state.sources.map((result, i) => (
              <label key={i} className={styles.source}>
                <input type="checkbox" key={i} value={result.name} />
                {result.name}
              </label>
            ))}
        </div>
      );
    } else {
      return null;
    }
  }
}

export default News;