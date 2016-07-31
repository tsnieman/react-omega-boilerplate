// Basics
import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './About.css';

// Components
import Card from 'components/Card';
// import Icon from 'components/Icon';
// import { Link } from 'react-router';

const About = ({ users }) => (
  <div styleName="page">
    <h1>About</h1>

    <Card.Wrapper>
      <Card.Title>
        Users
      </Card.Title>

      <Card.Body>
        <ul>
          {Object.keys(users).map((userId) => {
            const user = users[userId];
            return (
              <li key={userId}>
                <strong>Name:</strong> {user.name}
              </li>
            );
          })}
        </ul>
      </Card.Body>
    </Card.Wrapper>
  </div>
);

About.propTypes = {
  users: PropTypes.object.isRequired,
};

export default cssModules(About, styles);
