// Basics
import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './GithubUser.css';

// Components
import BodyText from 'components/BodyText';
import Card from 'components/Card';
// import Icon from 'components/Icon';
// import { Link } from 'react-router';

const GithubUser = ({ user, loading }) => {
  // TODO DRY-er.
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
          <BodyText loading>
            @Username
          </BodyText>
        </Card.Title>

        <Card.Body>
          <dl>
            <dt>followers</dt>
            <dd>
              <BodyText loading>
                ###
              </BodyText>
            </dd>

            <dt>following</dt>
            <dd>
              <BodyText loading>
                ###
              </BodyText>
            </dd>
          </dl>
        </Card.Body>
      </Card.Wrapper>
    );
  }

  // Not loading and user still not present?
  // Something went wrong.
  if (!user) {
    return (
      <Card.Wrapper styleName="wrapper">
        <Card.Body>
          Github user could not be loaded.
        </Card.Body>
      </Card.Wrapper>
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
