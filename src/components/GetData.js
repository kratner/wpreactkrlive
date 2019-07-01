// import React, {Components} from 'react';

export const appUrl = 'https://keithratner.live';
export const appJSONEndpoint = '/wp-json/wp/v2/';
export const appGraphQLEndpoint = '/graphql';
export const queryPages = `{
    pages {
      nodes {
        id
        title
        date
        excerpt
        content
      }
    }
  }
  `;
export const queryPosts = `
  query GET_POSTS($first: Int = 5) {
    posts(first: $first) {
      edges {
        node {
          postId
          title
          date
          content
          categories {
            edges {
              node {
                name
              }
            }
          }
          featuredImage {
            id
            sourceUrl
          }
        }
      }
    }
  }
    `;
export const gqlPages = JSON.stringify({
  query: `${queryPages}`
});
export const gqlPosts = JSON.stringify({
  query: `${queryPosts}`
});
export const appGraphQLUrl = `${appUrl}${appGraphQLEndpoint}`;
