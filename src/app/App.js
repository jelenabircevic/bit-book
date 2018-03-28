import React, { Component } from 'react';
import './App.css';
import FeedPage from './FeedPage/FeedPage';
import NavHeader from './partials/NavHeader'
import Footer from './partials/Footer'

class App extends Component {
  render() {
    return (
        <div>
          <NavHeader/>
          <FeedPage/>
          <Footer/>
        </div>
      
    );
  }
}

export default App;
