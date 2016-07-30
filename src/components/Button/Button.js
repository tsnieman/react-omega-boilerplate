// Basics
import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './Button.css';

// Components
// import Icon from 'components/Icon';
import { Link } from 'react-router';

// TODO build the route helper into this? overkill?

const Button = (props) => {
  const {
    children,

    // Button-specific
    // variety,

    // link-specific
    to,
  } = props;

  const cleanProps = {
    ...props,
    styleName: 'wrapper',
  };
  // delete cleanProps.variety; // Button-specific
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

  // Button-specific
  // variety, // other names: tone, kind, type etc)

  // link-specific
  to: PropTypes.string,
  href: PropTypes.string,
};

Button.defaultProps = {
};

export default cssModules(Button, styles);
