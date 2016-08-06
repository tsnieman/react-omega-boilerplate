// Basics
import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './IconButton.css';

// Components
import Button from 'components/Button';
import Icon from 'components/Icon';

const IconButton = (props) => {
  const {
    children,
    icon,
  } = props;

  const cleanProps = { ...props };
  delete cleanProps.styles; // avoid react-css-modules related errors

  return (
    <Button {...cleanProps}>
      <Icon icon={icon}>
        {children}
      </Icon>
    </Button>
  );
};

IconButton.propTypes = {
  children: PropTypes.any,

  // refer to <Icon /> props
  icon: PropTypes.any.isRequired,
};

IconButton.defaultProps = {
};

export default cssModules(IconButton, styles);
