// Basics
import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './Title.css';

// Components
import BodyText from 'components/BodyText';
// import Icon from 'components/Icon';
// import { Link } from 'react-router';

const Title = (props) => {
  const {
    children,
    className,
  } = props;

  const cleanProps = { ...props };
  delete cleanProps.styles;

  if (children) {
    return (
      <BodyText {...cleanProps} styleName="wrapper" className={`${className} card-title`}>
        <span styleName="title-text" className="card-title-text">
          {children}
        </span>
      </BodyText>
    );
  }

  return null;
};

Title.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
};

Title.defaultProps = {
  className: '',
};

export default cssModules(Title, styles);
