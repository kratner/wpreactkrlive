import React, { Component } from 'react';
import './styles/normalize.css';
import './styles/App.scss';
import ProjectLinksList from './components/ProjectLinksList';
import SocialLinksList from './components/SocialLinksList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ProjectLinksList />
        <SocialLinksList />
      </div>
    );
  }
}

export default App;
