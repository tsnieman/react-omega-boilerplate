// Basics
import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './About.css';

// Components
import GithubUser from 'containers/GithubUser';
import BodyText from 'components/BodyText';
import Message from 'components/Message';
// import Icon from 'components/Icon';
// import { Link } from 'react-router';

const About = () => (
  <div styleName="page">
    <BodyText styleName="intro">
      <h1>About</h1>
      <p>Humans who have contributed to this repo.</p>

      <Message.Wrapper variant="info" styleName="message">
        <Message.Body>
          Note: loading intentionally delayed (less than 2 seconds)
          to show off the fancy loading effect.
        </Message.Body>
      </Message.Wrapper>

      <Message.Wrapper variant="info" styleName="message">
        <Message.Body>
          Note: also one of the 'humans' in the list is a fake
          github username to show a failure-handling state. This
          is mostly to see how smooth I can make failure.
        </Message.Body>
      </Message.Wrapper>
    </BodyText>

    <ul>
      <li styleName="human">
        <GithubUser username="tsnieman" />
      </li>

      <li styleName="human">
        <GithubUser username="definitelyafakeuserwithaloginthatistoolong" />
      </li>
    </ul>
  </div>
);

About.propTypes = {
  TODO: PropTypes.any,
};

About.defaultProps = {
};

export default cssModules(About, styles);
