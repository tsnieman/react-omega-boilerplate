// Basics
import React from 'react';
import cssModules from 'react-css-modules';

// TODO eslint-disable is used here because i can't stop the "no duplicate import" bullshit.
/* eslint-disable */
import './App.css'; // Global site styling (reset, typography, etc)
import styles from './App.css'; // Styles for this component (via css modules)
/* eslint-enable */

/*
import WebFont from 'webfontloader'; // Site font loader
WebFont.load({
  google: {
    families: ['Roboto:300,400,500,700'],
  },
});
*/

// Routing
import {
  BrowserRouter,
  Match,
  Miss,
  // Link,
} from 'react-router';

// Pages
import HomePage from 'containers/pages/Home';
import AboutPage from 'containers/pages/About';

// Frames
import StandardPageFrame from 'components/frames/StandardPage';
import AppHeaderFrame from 'components/frames/AppHeader';

const App = () => (
  <BrowserRouter>
    <div styleName="app-wrapper">
      <div styleName="app-content">
        <AppHeaderFrame>
          <StandardPageFrame>
            <Match
              exactly
              pattern="/"
              component={HomePage}
            />

            <Match
              exactly
              pattern="/about"
              component={AboutPage}
            />

            {/* If none of those match, then a sibling `Miss` will render. */}
            <Miss
              component={() => (
                <div>404!</div>
              )}
            />
          </StandardPageFrame>
        </AppHeaderFrame>
      </div>
    </div>
  </BrowserRouter>
);

App.propTypes = {
};

export default cssModules(App, styles);
