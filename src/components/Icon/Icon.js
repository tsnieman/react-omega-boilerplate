// Basics
import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './Icon.css';

// Get additional icons (cases) from
// http://dmfrancisco.github.io/react-icons/

/* eslint-disable max-len */
// TODO probably dont need Map, just wanted to try it.
const graphics = new Map([
  [
    'test',
    <g><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09-1.09-1.28-2.76-2.09-4.5-2.09-3.08 0-5.5 2.42-5.5 5.5 0 3.78 3.4 6.86 8.55 11.54l1.45 1.31 1.45-1.32c5.15-4.67 8.55-7.75 8.55-11.53 0-3.08-2.42-5.5-5.5-5.5zm-4.4 15.55l-.1.1-.1-.1c-4.76-4.31-7.9-7.16-7.9-10.05 0-2 1.5-3.5 3.5-3.5 1.54 0 3.04.99 3.57 2.36h1.87c.52-1.37 2.02-2.36 3.56-2.36 2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path></g>,
  ],
  [
    'search',
    <g><path d="M15.5 14h-.79l-.28-.27c.98-1.14 1.57-2.62 1.57-4.23 0-3.59-2.91-6.5-6.5-6.5s-6.5 2.91-6.5 6.5 2.91 6.5 6.5 6.5c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99 1.49-1.49-4.99-5zm-6 0c-2.49 0-4.5-2.01-4.5-4.5s2.01-4.5 4.5-4.5 4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5z"></path></g>,
  ],
  [
    'directions',
    <g><path d="M21.71 11.29l-9-9c-.39-.39-1.02-.39-1.41 0l-9 9c-.39.39-.39 1.02 0 1.41l9 9c.39.39 1.02.39 1.41 0l9-9c.39-.38.39-1.01 0-1.41zm-7.71 3.21v-2.5h-4v3h-2v-4c0-.55.45-1 1-1h5v-2.5l3.5 3.5-3.5 3.5z"></path></g>,
  ],
  [
    'map',
    <g><path d="M20.5 3l-.16.03-5.34 2.07-6-2.1-5.64 1.9c-.21.07-.36.25-.36.48v15.12c0 .28.22.5.5.5l.16-.03 5.34-2.07 6 2.1 5.64-1.9c.21-.07.36-.25.36-.48v-15.12c0-.28-.22-.5-.5-.5zm-5.5 16l-6-2.11v-11.89l6 2.11v11.89z"></path></g>,
  ],
  [
    'repeat',
    <g><path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"></path></g>,
  ],
  [
    'star',
    <g><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></g>,
  ],
  [
    'star-outline',
    <g><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path></g>,
  ],
  [
    'more-h',
    <g><path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></g>,
  ],
  [
    'more-v',
    <g><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></g>,
  ],
  [
    'edit',
    <g><path d="M3 17.25v3.75h3.75l11.06-11.06-3.75-3.75-11.06 11.06zm17.71-10.21c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></g>,
  ],
  [
    'delete',
    <g><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-12h-12v12zm13-15h-3.5l-1-1h-5l-1 1h-3.5v2h14v-2z"></path></g>,
  ],
  [
    'link',
    <g><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4v-1.9h-4c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9h-4c-1.71 0-3.1-1.39-3.1-3.1zm4.1 1h8v-2h-8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4v1.9h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path></g>,
  ],
  [
    'stashbox',
    <g><path d="M7 19h10v-15h-10v15zm-5-2h4v-11h-4v11zm16-11v11h4v-11h-4z"></path></g>,
  ],
  [
    'warning',
    <g><path d="M1 21h22l-11-19-11 19zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path></g>,
  ],
  [
    'error',
    <g><path d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm1 15h-2v-2h2v2zm0-4h-2v-6h2v6z"></path></g>,
  ],
  [
    'info',
    <g><path d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm1 15h-2v-6h2v6zm0-8h-2v-2h2v2z"></path></g>,
  ],
  [
    'favorite',
    <g><path d="M12 21.35l-1.45-1.32c-5.15-4.67-8.55-7.75-8.55-11.53 0-3.08 2.42-5.5 5.5-5.5 1.74 0 3.41.81 4.5 2.09 1.09-1.28 2.76-2.09 4.5-2.09 3.08 0 5.5 2.42 5.5 5.5 0 3.78-3.4 6.86-8.55 11.54l-1.45 1.31z"></path></g>,
  ],
  [
    'favorite-outline',
    <g><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09-1.09-1.28-2.76-2.09-4.5-2.09-3.08 0-5.5 2.42-5.5 5.5 0 3.78 3.4 6.86 8.55 11.54l1.45 1.31 1.45-1.32c5.15-4.67 8.55-7.75 8.55-11.53 0-3.08-2.42-5.5-5.5-5.5zm-4.4 15.55l-.1.1-.1-.1c-4.76-4.31-7.9-7.16-7.9-10.05 0-2 1.5-3.5 3.5-3.5 1.54 0 3.04.99 3.57 2.36h1.87c.52-1.37 2.02-2.36 3.56-2.36 2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path></g>,
  ],
  [
    'comment',
    <g><path d="M21.99 4c0-1.1-.89-2-1.99-2h-16c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zm-3.99 10h-12v-2h12v2zm0-3h-12v-2h12v2zm0-3h-12v-2h12v2z"></path></g>,
  ],
  [
    'check-box',
    <g><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></g>,
  ],
  [
    'check-box-outline-blank',
    <g><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path></g>,
  ],
  [
    'home',
    <g><path d="M10 20v-6h4v6h5v-8h3l-10-9-10 9h3v8z"></path></g>,
  ],
]);
/* eslint-enable max-len */

const Icon = (props) => {
  const {
    children,
  } = props;

  let graphic = graphics.get(props.icon);

  const cleanProps = { ...props };
  delete cleanProps.icon; // Icon-specific
  delete cleanProps.styles; // avoid react-css-modules related errors

  return (
    <span {...cleanProps} styleName="wrapper">
      <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        styleName="icon"
        className="icon"
      >{graphic}</svg>

      {children && <span styleName="label">{children}</span>}
    </span>
  );
};

Icon.propTypes = {
  children: PropTypes.any,
  icon: PropTypes.string.isRequired,
};

Icon.defaultProps = {
};

export default cssModules(Icon, styles);
