// Basics
import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './Wrapper.css';

// Components
// import Icon from 'components/Icon';
// import { Link } from 'react-router';

const VALID_SUBCOMPONENTS = [
  'Body',
  'Actions',
];

export const VARIANTS = [
  'default',
  'inverse',
  'positive',
  'negative',
  'info', // TODO "info" feels meaningless.
];

const Wrapper = (props) => {
  const {
    children,
    className,
    variant,
  } = props;

  let styleVariant = 'message-default';
  if (VARIANTS.includes(variant)) {
    styleVariant = `message-${variant}`;
  }

  const cleanProps = { ...props };
  delete cleanProps.styles; // avoid react-css-modules related errors
  delete cleanProps.variant; // Message-specific

  if (children) {
    let messageChildren = [];
    React.Children.map(children, (child) => {
      // TODO not sure displayName is reliable in prod... hmmm..
      const hasType = (typeof child.type === 'function'); // divs or whatever would just be 'div'
      const isValidSubcomponent = hasType && VALID_SUBCOMPONENTS.includes(child.type.displayName);
      if (isValidSubcomponent) messageChildren.push(child);
    });

    return (
      <div {...cleanProps} styleName={styleVariant} className={`${className} message-wrapper`}>
        {messageChildren}
      </div>
    );
  }

  return null;
};

Wrapper.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  variant: PropTypes.string,
};

Wrapper.defaultProps = {
  className: '',
  variant: 'default',
};

export default cssModules(Wrapper, styles);
