import React, { Component } from 'react';
import './App.css';
import FeedPage from './FeedPage/FeedPage';
import NavHeader from './partials/NavHeader'
import ProfilePage from './ProfilePage/ProfilePage'
import PeoplePage from './PeoplePage/PeoplePage'
import Footer from './partials/Footer'
import { Switch, Route, Redirect } from 'react-router-dom';
import PostDetails from './PostDetails/PostDetails';


class App extends Component {
  render() {
    return (
      <div>
        <NavHeader />
        <Switch>
          <Route path='/feed' component={FeedPage} />
          <Route exact path='/people' component={PeoplePage} />
          <Route path='/people/:id' component={ProfilePage} />
          <Route path='/:type/:id' component={PostDetails} /> 
          <Redirect from='/profile' to='/people/391' />
          <Redirect from='/' to='/feed' />
        </Switch>
        <Footer />
      </div>

    );
  }
}

export default App;

