// Basics
import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './GithubUser.css';

// Components
import Card from 'components/Card';
// import Icon from 'components/Icon';
// import { Link } from 'react-router';

const GithubUser = ({ user }) => {
  if (!user) {
    return (
      <div styleName="wrapper">
        Github user not found.
      </div>
    );
  }


  return (
    <Card.Wrapper styleName="wrapper">
      <Card.Media>
        <img
          src={user.avatar_url}
          alt={`github user @${user.login}'s avatar`}
        />
      </Card.Media>

      <Card.Title>
        <a
          href={`https://github.com/${user.login}`}
          target="_blank"
          rel="noopener noreferrer"
        >@{user.name}</a>
      </Card.Title>

      <Card.Body>
        <dl>
          <dt>followers</dt>
          <dd>{user.followers}</dd>

          <dt>following</dt>
          <dd>{user.following}</dd>
        </dl>
      </Card.Body>
    </Card.Wrapper>
  );
};

GithubUser.propTypes = {
  user: PropTypes.object.isRequired,
};

GithubUser.defaultProps = {
};

export default cssModules(GithubUser, styles);
