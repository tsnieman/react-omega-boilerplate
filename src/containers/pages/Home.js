// Basics
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from 'actions';

// Components
import HomePage from 'components/pages/Home';

function mapStateToProps() { // (state, ownProps)
  return {
  };
}

function mapDispatchToProps(dispatch) { // (dispatch, ownProps)
  return bindActionCreators({
    createMessage: (text) => actions.messages.createMessage({ body: text }),
    createErrorMessage: (errText) => actions.messages.createErrorMessage(new Error(errText)),
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
