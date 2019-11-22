let appUrl = "https://keithratner.live";
//let appUrl = 'http://krlocalwp.localhost';
//https://optionexplicit.live/wp-json/wpcms/v1/posts-by-category/?name=distribution
let appOptionExplicitUrl = "https://optionexplicit.live";
let appJSONEndpoint = "/wp-json";
let appRESTAPITrunk = "/wpcms/v1";
let RESTEndpointPostsByCategory = "/posts-by-category/";
export const appQueryUrl = `${appUrl}${appJSONEndpoint}${appRESTAPITrunk}${RESTEndpointPostsByCategory}?`;
export const appOEQueryUrl = `${appOptionExplicitUrl}${appJSONEndpoint}${appRESTAPITrunk}${RESTEndpointPostsByCategory}?`;
export const qryPostsFromLinksCategory = `${appQueryUrl}name=links`;
export const qryPostsFromPrintsCategory = `${appQueryUrl}name=prints`;
export const qryPostsFromOEDistributionCategory = `${appOEQueryUrl}name=code`;

//https://keithratner.live/wp-json/wpcms/v1/posts-by-category?name=prints
