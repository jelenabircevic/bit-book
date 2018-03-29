import React, { Component } from 'react';
import './App.css';
import FeedPage from './FeedPage/FeedPage';
import NavHeader from './partials/NavHeader'
import ProfilePage from './ProfilePage/ProfilePage'
import Footer from './partials/Footer'
import { Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <NavHeader />
        <Switch>
          <Route exact path='/' component={FeedPage} />
          {/* <Route exact path='/people' component={People} /> */}
          <Route path='/people/:id' component={ProfilePage} />
        </Switch>
        <Footer />
      </div>

    );
  }
}

export default App;
