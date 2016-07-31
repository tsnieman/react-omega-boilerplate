// Basics
import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './Actions.css';

// Components
// import Icon from 'components/Icon';
// import { Link } from 'react-router';

const Actions = (props) => {
  const {
    children,
    className,
  } = props;

  const cleanProps = { ...props };
  delete cleanProps.styles;

  if (children) {
    return (
      <div {...cleanProps} styleName="wrapper" className={`${className} card-actions`}>
        {children}
      </div>
    );
  }

  return null;
};

Actions.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
};

Actions.defaultProps = {
  className: '',
};

export default cssModules(Actions, styles);
