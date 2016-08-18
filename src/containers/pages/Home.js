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
    createError: (err) => actions.messages.createMessage(
      new Error(`Test message + ${err}`, 'thing'),
    ),
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
