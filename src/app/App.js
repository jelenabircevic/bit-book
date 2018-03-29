import React, { Component } from 'react';
import './App.css';
import FeedPage from './FeedPage/FeedPage';
import NavHeader from './partials/NavHeader'
import Footer from './partials/Footer'
import { Switch, Route } from 'react-router-dom';
import PostDetails from './PostDetails/PostDetails';

class App extends Component {
  render() {
    return (
      <div>
        <NavHeader />
        <Switch>
          <Route exact path='/' component={FeedPage} />
          <Route  path='/:type/:id' component={PostDetails} />
        </Switch>
        <Footer />
      </div>

    );
  }
}

export default App;

