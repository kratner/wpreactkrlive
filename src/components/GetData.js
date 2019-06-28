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
export const gqlPages = JSON.stringify({
  query: `${queryPages}`
});
export const getPosts = `${appUrl}${appJSONEndpoint}posts`;
export const appGraphQLUrl = `${appUrl}${appGraphQLEndpoint}`;
