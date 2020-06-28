import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import LandingPage from './LandingPage/';
import SearchPage from './SearchPage/';
import GamePage from './GamePage/';
import Background from './Background/Background';

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path='/' exact>
            <LandingPage />
          </Route>
          <Route path='/search/:query' exact>
            <SearchPage />
          </Route>
          <Route path='/:gameSlug'>
            <GamePage />
          </Route>
          <Redirect to='/' />
        </Switch>
      </Router>
      <Background />
    </React.Fragment>
  );
};

export default App;
