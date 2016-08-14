// Basics
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import actions from 'actions';

// Components
import AboutPage from 'components/pages/About';

function mapStateToProps() { // (state, ownProps)
  return {
    // Placeholder
  };
}

function mapDispatchToProps(dispatch) { // (dispatch, ownProps)
  return bindActionCreators({
    // Placeholder
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutPage);
