// Basics
import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './StarButton.css';

// Components
import IconButton from 'components/IconButton';

const StarButton = (props) => {
  const {
    children,
  } = props;

  return (
    <IconButton {...props} icon="star-outline">
      {children}
    </IconButton>
  );
};

StarButton.propTypes = {
  children: PropTypes.any.isRequired,
};

StarButton.defaultProps = {
};

export default cssModules(StarButton, styles);
