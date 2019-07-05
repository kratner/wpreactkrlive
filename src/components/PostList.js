import React, { Component } from 'react';
import { appGraphQLUrl, gqlPosts } from './GetDataGraphQL';

class PostList extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    let appUrl = `${appGraphQLUrl}`;
    let queryPosts = `${gqlPosts}`;
    fetch(appUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: queryPosts
    })
      .then(data => data.json())
      .then(data => {
        this.setState({
          posts: data.data.posts.edges
        });
      });
  }

  render() {
    let listposts = this.state.posts.map((node, index) => {
      return (
        <div key={index}>
          <h4>{node.node.title}</h4>
          <p
            dangerouslySetInnerHTML={{
              __html: node.node.content
            }}
          />
          {/* dangerouslySetInnerHTML eliminates the html tags */}
        </div>
      );
    });

    return (
      <div>
        <h1>Posts</h1>
        {listposts}
      </div>
    );
  }
}

export default PostList;
