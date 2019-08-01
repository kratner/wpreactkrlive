import React, { Component } from 'react';
import { qryPostsFromLinksCategory } from './GetDataWPRESTAPI';

class SocialLinksList extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    let appUrl = `${qryPostsFromLinksCategory}`;
    fetch(appUrl)
      .then(data => data.json())
      .then(data => {
        this.setState({
          posts: data
        });
      });
  }

  render() {
    let listSocialLinks = this.state.posts
      .filter(node => node.acf.type === 'social')
      .sort((a, b) =>
        a.acf.weight > b.acf.weight ? 1 : -1
      )
      .map((node, index) => {
        return (
          <li key={index}>
            <a
              href={node.acf.href}
              className={node.acf.class}
              title={node.title.rendered}
              target={node.acf.target}
            >
              {node.acf.text}
              <span className={'icon-' + node.acf.icon} />
            </a>
          </li>
        );
      });

    return (
      <div class="social-links" id="social-links-container">
        <ul>{listSocialLinks}</ul>
      </div>
    );
  }
}

export default SocialLinksList;