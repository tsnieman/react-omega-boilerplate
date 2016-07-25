// Basics
import React from 'react';
import {
  Route,
  IndexRoute,
} from 'react-router';

// Components
import App from 'components/App';
import HomePage from 'containers/pages/Home';
import AboutPage from 'containers/pages/About';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />

    <Route path="home" component={HomePage} />
    <Route path="about" component={AboutPage} />
  </Route>
);
