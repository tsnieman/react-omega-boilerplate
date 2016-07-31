// Basics
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from 'actions';

// Components
import AboutPage from 'components/pages/About';

class AboutPageContainer extends React.Component {
  componentDidMount() {
    // TODO tie into url state or something? just for funsies.
    this.props.getUser('tsnieman');
  }

  render() {
    const { users } = this.props;

    return (
      <AboutPage
        users={users}
      />
    );
  }
}

AboutPageContainer.propTypes = {
  getUser: PropTypes.func.isRequired,
  users: PropTypes.object.isRequired,
};

function mapStateToProps(state) { // (state, ownProps)
  console.log({ state });
  return {
    users: state.github.users,
  };
}

function mapDispatchToProps(dispatch) { // (dispatch, ownProps)
  return bindActionCreators({
    getUser: actions.github.getUser,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutPageContainer);
