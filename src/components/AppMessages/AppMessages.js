// Basics
import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './AppMessages.css';

// Components
import Message from 'components/Message';
import Button from 'components/Button';

const AppMessages = (props) => {
  const {
    // children,
    className,
    messages,
    removeMessage,
  } = props;

  const hasMessages = (messages && messages.length > 0);
  if (!hasMessages) return null;

  const cleanProps = { ...props };
  delete cleanProps.styles; // avoid react-css-modules related errors
  delete cleanProps.messages; // AppMessages-specific
  delete cleanProps.removeMessage; // AppMessages-specific

  return (
    <div
      {...cleanProps}
      className={`${className} app-messages-wrapper`}
      styleName="wrapper"
    >
      {messages.map((message) => (
        <Message.Wrapper key={message.id} styleName="message">
          <Message.Body>
            {/* TODO 'message' obj is error-specific rn */}
            {message.body.message}
          </Message.Body>

          <Message.Actions>
            <Button
              onClick={() => removeMessage(message.id)}
            >Dismiss</Button>
          </Message.Actions>
        </Message.Wrapper>
      ))}
    </div>
  );
};

AppMessages.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  messages: PropTypes.array,
  removeMessage: PropTypes.func.isRequired,
};

AppMessages.defaultProps = {
  className: '',
};

export default cssModules(AppMessages, styles);
