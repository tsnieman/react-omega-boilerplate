// Basics
import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './Media.css';

// Components
// import Icon from 'components/Icon';
// import { Link } from 'react-router';

const Media = (props) => {
  const {
    children,
    className,
  } = props;

  const cleanProps = { ...props };
  delete cleanProps.styles;

  if (children) {
    return (
      <div {...cleanProps} styleName="wrapper" className={`${className} card-media`}>
        {children}
      </div>
    );
  }

  return null;
};

Media.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};

Media.defaultProps = {
  className: '',
};

export default cssModules(Media, styles);
