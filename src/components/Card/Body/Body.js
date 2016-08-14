// Basics
import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './Body.css';

// Components
import BodyText from 'components/BodyText';
// import Icon from 'components/Icon';
// import { Link } from 'react-router';

const Body = (props) => {
  const {
    children,
    className,
  } = props;

  const cleanProps = { ...props };
  delete cleanProps.styles; // avoid react-css-modules related errors

  if (children) {
    return (
      <BodyText {...cleanProps} styleName="wrapper" className={`${className} card-body`}>
        {children}
      </BodyText>
    );
  }

  return null;
};

Body.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
};

Body.defaultProps = {
  className: '',
};

export default cssModules(Body, styles);
