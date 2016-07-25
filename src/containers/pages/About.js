// Basics
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import actions from 'actions';

// Components
import AboutPage from 'components/pages/About';

const AboutContainer = () => <AboutPage />;

function mapStateToProps() {
  return {
  };
}

function mapDispatchToProps(dispatch) { // (dispatch, ownProps)
  return bindActionCreators({
    // getMaps: actions.map.getMaps,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutContainer);
