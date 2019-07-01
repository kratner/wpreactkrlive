import React, { Component } from 'react';
import './styles/normalize.css';
import './styles/App.scss';
import PostList from './components/PostList';
import PagesList from './components/PagesList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="col6">
          <PostList />
        </div>
        <div className="col6">
          <PagesList />
        </div>
      </div>
    );
  }
} 

export default App;
