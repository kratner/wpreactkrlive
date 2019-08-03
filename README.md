## WordPress React KRLive

View demo at https://kratner.github.io/wpreactkrlive/

### "Headless" WordPress CMS with React Front End

This is a React-based UI pulling data from https://keithratner.live

### Technologies Employed

- ReactJS
- SASS
- WordPress REST API
- Custom WordPress REST Endpoint Plugin

### Local Environment Setup Guide

### `npm run deploy` to publish to GitHub Pages

To switch to live data, WordPress REST API endpoints are defined in

### ./components/GetDataWPRESTAPI.js

```
let appUrl = 'https://keithratner.live';
//let appUrl = 'http://krlocalwp.localhost';
let appJSONEndpoint = '/wp-json';
let appRESTAPITrunk = '/wpcms/v1';
let RESTEndpointPostsByCategory = '/posts-by-category/';
export const appQueryUrl = `${appUrl}${appJSONEndpoint}${appRESTAPITrunk}${RESTEndpointPostsByCategory}?`;
export const qryPostsFromLinksCategory = `${appQueryUrl}name=links`;
```

#### Setup Local WordPress Environment

If you're using Windows, I recommend AMPPS Portable to get a local LAMP stack up and running. Try to match the local development configuration as closely as possible to avoid having to make changes to source files. This way, the GitHub repo should work out-of-the-box (_see installation details below_).

Configure local virtual host to **krlocalwp.localhost**

Local WordPress installation should be accessible via
http://krlocalwp.localhost

Login to admin via http://krlocalwp.localhost/wp-admin

Install and activate the following plugins:

- Classic Editor

- Advanced Custom Fields

- ACF to REST API

Upload, install and activate the following custom plugin (_available on GitHub_):

- wp-cms-rest-endpoints.zip

Import WordPress XMS file exported from keithratner.live

#### Setup Local React Environment

_Standard **create-react-app** verbiage to follow_

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

git clone repository

### `npm install`

### `npm update`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
