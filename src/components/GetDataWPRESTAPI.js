let appUrl = 'https://keithratner.live';
//let appUrl = 'http://krlocalwp.localhost';
let appJSONEndpoint = '/wp-json';
let appRESTAPITrunk = '/wpcms/v1';
let RESTEndpointPostsByCategory = '/posts-by-category/';
export const appQueryUrl = `${appUrl}${appJSONEndpoint}${appRESTAPITrunk}${RESTEndpointPostsByCategory}?`;
export const qryPostsFromLinksCategory = `${appQueryUrl}name=links`;
