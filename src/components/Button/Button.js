// Basics
import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './Button.css';

// Components
// import Icon from 'components/Icon';
import { Link } from 'react-router';

// TODO build the route helper into this? overkill?

export const VARIANTS = [
  'default',
  'positive',
  'negative',
];

const Button = (props) => {
  const {
    children,
    className,

    // Button-specific
    variant,

    // link-specific
    to,
  } = props;

  let styleVariant = 'button-default';
  if (VARIANTS.includes(variant)) {
    styleVariant = `button-${variant}`;
  }

  const cleanProps = {
    ...props,
    styleName: styleVariant,
    className: `${className} button`,
  };
  delete cleanProps.variant; // Button-specific
  delete cleanProps.styles; // react-css-modules cruft


  // Depending on props passed, Button might
  // be a `<button>` or `<ReactRouter.Link>`
  const isLink = !!to;
  return isLink ? (
    <Link {...cleanProps}>
      {children}
    </Link>
  ) : (
    <button {...cleanProps}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,

  // Button-specific
  variant: PropTypes.string,

  // link-specific
  to: PropTypes.string,
  href: PropTypes.string,
};

Button.defaultProps = {
  className: '',
};

export default cssModules(Button, styles);
