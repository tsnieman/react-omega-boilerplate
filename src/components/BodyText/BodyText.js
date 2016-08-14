// Basics
import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './BodyText.css';

const BodyText = (props) => {
  const {
    children,
  } = props;

  const cleanProps = { ...props };
  delete cleanProps.styles; // avoid react-css-modules related errors

  return (
    <div {...cleanProps} styleName="wrapper">
      {children}
    </div>
  );
};

BodyText.propTypes = {
  children: PropTypes.any,
};

BodyText.defaultProps = {
};

export default cssModules(BodyText, styles);
