// Basics
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import actions from 'actions';

// Components
import HomePage from 'components/pages/Home';

const HomePageContainer = () => <HomePage />;

function mapStateToProps() { // (state, ownProps)
  return {
  };
}

function mapDispatchToProps(dispatch) { // (dispatch, ownProps)
  return bindActionCreators({
    // getMaps: actions.map.getMaps,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer);
