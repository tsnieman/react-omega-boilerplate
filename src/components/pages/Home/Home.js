// Basics
import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './Home.css';

// Components
import Button from 'components/Button';
import StarButton from 'components/StarButton';
import IconButton from 'components/IconButton';
import Card from 'components/Card';
import Checkbox from 'components/Checkbox';
// import Icon from 'components/Icon';
// import { Link } from 'react-router';
// import Message from 'components/Message';

const Home = ({ createMessage, createErrorMessage }) => (
  <div styleName="page">
    <header styleName="title">
      <h1>Home</h1>
    </header>

    <Card.Wrapper styleName="card">
      <Card.Title>
        Card Title
      </Card.Title>

      <Card.Body>
        <p>This is Card.Body text.</p>
        <br />
        <Button variant="positive" disabled>[disabled] button</Button>
        <br />
        <label htmlFor="test-checkbox">
          <Checkbox id="test-checkbox">Checkbox (with a label)</Checkbox>
        </label>
      </Card.Body>

      <Card.Actions>
        <Button>Action Button</Button>
        <Button to="/about">Action Button[to]</Button>
        <IconButton icon="more-v" />

        <StarButton styleName="right-button" />
      </Card.Actions>
    </Card.Wrapper>

    <Card.Wrapper styleName="main-card">
      <Card.Title>
        Card Title
      </Card.Title>

      <Card.Body>
        <p>This is Card.Body text.</p>
        <p>Test 2nd paragraph.</p>
        <a href="http://google.com/">Link test</a>
      </Card.Body>

      <Card.Actions>
        <Button variant="negative">Negative button</Button>
        <Button variant="positive">Positive button</Button>
        <IconButton icon="more-v" variant="inverse">Inverse</IconButton>
        <IconButton icon="warning" variant="inverse" disabled>Disabled</IconButton>
      </Card.Actions>
    </Card.Wrapper>
    <Card.Wrapper styleName="card">
      <Card.Media>
        <img
          src="http://i.imgur.com/ftcpvi5.png"
          alt="colorful doodle"
        />
      </Card.Media>

      <Card.Title>
        Little hero sketch, speed colored
      </Card.Title>

      <Card.Body>
        <p>
          By Calum Clark.
          {' '}
          <a
            href="https://dribbble.com/shots/2626767-Little-hero-sketch-speed-colored"
            target="_blank"
            rel="noopener noreferrer"
          >Check him out on Dribbble</a>.
        </p>
      </Card.Body>

      <Card.Actions>
        <IconButton icon="comment">Comment</IconButton>
        <IconButton icon="more-v" />

        <StarButton styleName="right-button" />
      </Card.Actions>
    </Card.Wrapper>

    <Card.Wrapper styleName="card">
      <Card.Title>
        Site messages (alerts/notifications/etc)
      </Card.Title>

      <Card.Body>
        <Button
          styleName="create-message-example"
          onClick={() => createMessage('This is an app message!')}
        >Create an app message</Button>

        <Button
          styleName="create-message-example"
          onClick={() => createErrorMessage('This is an app error message!')}
          variant="negative"
        >Create an app error message</Button>
      </Card.Body>
    </Card.Wrapper>
  </div>
);

Home.propTypes = {
  // For showing off the app message/error functionality.
  createMessage: PropTypes.func.isRequired,
  createErrorMessage: PropTypes.func.isRequired,
};

export default cssModules(Home, styles);
