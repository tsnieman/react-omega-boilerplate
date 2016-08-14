// Basics
import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './BodyText.css';

const BodyText = (props) => {
  const {
    children,
    loading,
  } = props;

  const cleanProps = { ...props };
  delete cleanProps.styles; // avoid react-css-modules related errors
  delete cleanProps.loading; // BodyText-specific

  // TODO instead of replacing with block char, maybe just use a
  // placeholder font? i.e. Redactor-font/BLOKK
  const content = loading ? children.replace(/[^\s\\]/g, '█') : children;
  const styleModule = loading ? 'wrapper-loading' : 'wrapper';

  return (
    <div {...cleanProps} styleName={styleModule}>
      {content}
    </div>
  );
};

BodyText.propTypes = {
  children: PropTypes.any,
  loading: PropTypes.bool,
};

BodyText.defaultProps = {
  loading: false,
};

export default cssModules(BodyText, styles);
