// Basics
import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './Home.css';

// Components
import Button from 'components/Button';
import StarButton from 'components/StarButton';
import IconButton from 'components/IconButton';
import Card from 'components/Card';
// import Icon from 'components/Icon';
// import { Link } from 'react-router';

const Home = () => (
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
        <a href="#">Link test</a>
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
  </div>
);

Home.propTypes = {
  TODO: PropTypes.any,
};

export default cssModules(Home, styles);
