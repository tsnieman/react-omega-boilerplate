// Basics
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from 'actions';

// Components
import AppMessages from 'components/AppMessages';

function mapStateToProps(state) { // (state, ownProps)
  return {
    messages: Object.keys(state.app.messages).map((messageId) => state.messages[messageId]),
  };
}

function mapDispatchToProps(dispatch) { // (dispatch, ownProps)
  return bindActionCreators({
    // Placeholder
    removeMessage: actions.messages.removeMessage,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AppMessages);
