import React, { Component } from 'react';
import './styles/normalize.css';
import './styles/App.scss';
import LinksList from './components/LinksLIst';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="col6">
          <LinksList />
        </div>
      </div>
    );
  }
}

export default App;
