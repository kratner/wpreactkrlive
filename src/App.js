import React, { Component } from 'react';
import './styles/normalize.css';
import './styles/App.scss';
import ProjectLinksList from './components/ProjectLinksList';
import SocialLinksList from './components/SocialLinksList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="front">
          <div class="brand-title">
            <h1>Keith Ratner</h1>
          </div>
          <ProjectLinksList />
          <SocialLinksList />
        </div>
      </div>
    );
  }
}

export default App;
