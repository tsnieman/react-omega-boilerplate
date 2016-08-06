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

// Frames
import StandardPageFrame from 'components/frames/StandardPage';
import AppHeaderFrame from 'components/frames/AppHeader';

export default (
  <Route path="/" component={App}>
    <Route component={AppHeaderFrame}>
      <Route component={StandardPageFrame}>
        <IndexRoute component={HomePage} />

        <Route path="home" component={HomePage} />
        <Route path="about" component={AboutPage} />
      </Route>
    </Route>
  </Route>
);
