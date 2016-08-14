// Basics
import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './GithubUser.css';

// Components
import Card from 'components/Card';
// import Icon from 'components/Icon';
// import { Link } from 'react-router';

const GithubUser = ({ user, loading }) => {
  if (loading) {
    return (
      <Card.Wrapper styleName="wrapper">
        <Card.Media>
          {/* TODO loader/spinner */}
          <img
            src="http://placehold.it/350x350?text=Loading"
            alt="placeholder avatar while loading"
          />
        </Card.Media>

        <Card.Title>
          <span styleName="loading-text">
            ████████████
          </span>
        </Card.Title>

        <Card.Body>
          <dl>
            <dt>followers</dt>
            <dd>
              <span styleName="loading-text">
                ███
              </span>
            </dd>

            <dt>following</dt>
            <dd>
              <span styleName="loading-text">
                ███
              </span>
            </dd>
          </dl>
        </Card.Body>
      </Card.Wrapper>
    );
  }

  if (!user) {
    return (
      <div>
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
  user: PropTypes.object,
  loading: PropTypes.bool,
};

GithubUser.defaultProps = {
  loading: false,
};

export default cssModules(GithubUser, styles);
