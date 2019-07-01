import React, { Component } from 'react';
import { appGraphQLUrl, gqlPages } from './GetData';

class PagesList extends Component {
  state = {
    pages: []
  };

  componentDidMount() {
    let appUrl = `${appGraphQLUrl}`;
    let queryPages = `${gqlPages}`;
    fetch(appUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: queryPages
    })
      .then(data => data.json())
      .then(data => {
        this.setState({
          pages: data.data.pages.nodes
        });
      });
  }

  render() {
    let listpages = this.state.pages.map((page, index) => {
      return (
        <div key={index}>
          <h4>{page.title}</h4>
          <p
            dangerouslySetInnerHTML={{
              __html: page.content
            }}
          />
          {/* dangerouslySetInnerHTML eliminates the html tags */}
        </div>
      );
    });

    return (
      <div>
        <h1>Pages</h1>
        {listpages}
      </div>
    );
  }
}

export default PagesList;
