// Basics
import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './IconButton.css';

// Components
import Button from 'components/Button';
import Icon from 'components/Icon';

/* TODO why can't I use styleName for the label?
 * "module not found" sort of errors... seems to be
 * partially because of ...props (...cleanProps) */

const IconButton = (props) => {
  const {
    children,
    icon,
  } = props;

  const cleanProps = { ...props };
  delete cleanProps.styles; // avoid react-css-modules related errors

  return (
    <Button {...cleanProps}>
      <Icon icon={icon} />
      {/*
        TODO revisit icon alignment vs label alignment,
        this is kinda ugly
      */}
      {children && (
        <span
          style={{
            display: 'inline',
            verticalAlign: '0.15em',
            marginLeft: '0.25em',
          }}
        >{children}</span>
      )}
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
