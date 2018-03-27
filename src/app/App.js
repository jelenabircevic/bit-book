import React, { Component } from 'react';
import './App.css';
import FeedPage from './FeedPage/FeedPage';
import Header from './partials/Header'

class App extends Component {
  render() {
    return (
        <div>
          <Header/>
          <FeedPage/>
        </div>
      
    );
  }
}

export default App;
