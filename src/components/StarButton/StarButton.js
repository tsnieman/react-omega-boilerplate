// Basics
import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './StarButton.css';
import { withState } from 'recompose';

// Components
import IconButton from 'components/IconButton';

const enhance = withState('starred', 'setStarred', (props) => props.starred);
const StarButton = enhance((props) => {
  const {
    starred,
    setStarred,
  } = props;

  const cleanProps = { ...props };
  delete cleanProps.starred; // StarButton-specific
  delete cleanProps.setStarred; // StarButton-specific

  const toggleStar = () => setStarred((n) => !n);

  const icon = starred ? 'star' : 'star-outline';
  const label = starred ? 'Starred' : 'Non-starred';
  const style = starred ? { backgroundColor: '#ffe200' } : {};

  return (
    <IconButton
      {...cleanProps}
      icon={icon}
      onClick={toggleStar}
      styleName="button"
      style={style}
    >{label}</IconButton>
  );
});

StarButton.propTypes = {
  starred: PropTypes.bool,
  setStarred: PropTypes.func,
};

StarButton.defaultProps = {
  starred: false,
};

export default cssModules(StarButton, styles);
