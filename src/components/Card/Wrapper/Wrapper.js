// Basics
import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './Wrapper.css';

// Components
// import Icon from 'components/Icon';
// import { Link } from 'react-router';

const Wrapper = (props) => {
  const {
    children,
    className,
  } = props;

  const cleanProps = { ...props };
  delete cleanProps.styles;

  if (children) {
    let cardChildren = [];
    React.Children.map(children, (child) => {
      // TODO not sure displayName is reliable in prod... hmmm..
      const hasType = (typeof child.type === 'function'); // divs or whatever would just be 'div'
      const isValidSubcomponent = hasType && (child.type.displayName.indexOf('Body') > -1);
      if (isValidSubcomponent) cardChildren.push(child);
    });

    return (
      <div {...cleanProps} styleName="wrapper" className={`${className} card-wrapper`}>
        {cardChildren}
      </div>
    );
  }

  return null;
};

Wrapper.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
};

Wrapper.defaultProps = {
  className: '',
};

export default cssModules(Wrapper, styles);
