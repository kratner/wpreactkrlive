import React, { Component } from 'react';
import { qryPostsFromLinksCategory } from './GetDataWPRESTAPI';

class ProjectLinksList extends Component {
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
    let listProjectLinks = this.state.posts
      .filter(node => node.acf.type === 'project')
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
              <span
                className={
                  'icon-' + node.acf.icon + ' inline-icon'
                }
              />
            </a>
          </li>
        );
      });

    return (
      <div id="project-links">
        <div className="link-padding">
          <ul>{listProjectLinks}</ul>
        </div>
      </div>
    );
  }
}

export default ProjectLinksList;
