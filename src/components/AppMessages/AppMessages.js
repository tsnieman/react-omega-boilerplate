// Basics
import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './AppMessages.css';

// Components
import Message from 'components/Message';
import Button from 'components/Button';

// Helpers
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const AppMessages = (props) => {
  const {
    className,
    messages,
    removeMessage,
  } = props;

  // const hasMessages = (messages && messages.length > 0);
  // if (!hasMessages) return null;

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
      <ReactCSSTransitionGroup
        transitionName={{
          enter: styles.enter,
          enterActive: styles.enterActive,
          leave: styles.leave,
          leaveActive: styles.leaveActive,
        }}
        transitionEnterTimeout={150}
        transitionLeaveTimeout={130}
      >
        {messages.map((message) => (
          <Message.Wrapper
            key={message.id}
            styleName="message"
            variant={message.variant}
            data-variant={message.variant || 'default'}
          >
            <Message.Body>
              {message.body}
            </Message.Body>

            <Message.Actions>
              <Button
                onClick={() => removeMessage(message.id)}
              >Dismiss</Button>
            </Message.Actions>
          </Message.Wrapper>
        ))}
      </ReactCSSTransitionGroup>
    </div>
  );
};

AppMessages.propTypes = {
  className: PropTypes.string,
  messages: PropTypes.array,
  removeMessage: PropTypes.func.isRequired,
};

AppMessages.defaultProps = {
  className: '',
  messages: [],
};

export default cssModules(AppMessages, styles);
