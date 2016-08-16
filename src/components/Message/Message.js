// Basics
import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './Message.css';

// Components
import BodyText from 'components/BodyText';
import Icon from 'components/Icon';

export const VARIANTS = [
  'default',
  'inverse',
  'positive',
  'negative',
  'info', // TODO "info" feels meaningless.
];

const Message = (props) => {
  const {
    children,
    variant,
  } = props;

  let styleVariant = 'message-default';
  if (VARIANTS.includes(variant)) {
    styleVariant = `message-${variant}`;
  }

  const cleanProps = { ...props };
  delete cleanProps.styles; // avoid react-css-modules related errors
  delete cleanProps.variant; // Message-specific

  return (
    <div {...cleanProps} styleName={styleVariant}>
      <BodyText>
        <Icon icon="info" styleName="icon" />
        {children}
      </BodyText>
    </div>
  );
};

Message.propTypes = {
  children: PropTypes.any,
  variant: PropTypes.string,
};

Message.defaultProps = {
  variant: 'default',
};

export default cssModules(Message, styles);
