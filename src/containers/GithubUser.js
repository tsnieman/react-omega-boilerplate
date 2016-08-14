// Basics
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from 'actions';

// Components
import GithubUser from 'components/GithubUser';

class GithubUserContainer extends React.Component {
  componentDidMount() {
    // Get user if not provided (i.e. not in store).
    if (!this.props.user) this.props.getUser('tsnieman');
  }

  render() {
    const { user } = this.props;

    // TODO loader/spinner! that's always a fun component.
    if (!user) return <span>Loading Github User...</span>;

    return (
      <GithubUser
        user={user}
      />
    );
  }
}

GithubUserContainer.propTypes = {
  getUser: PropTypes.func.isRequired,
  user: PropTypes.object,
  username: PropTypes.string.isRequired,
};

function mapStateToProps(state, ownProps) { // (state, ownProps)
  return {
    user: ownProps.user || state.github.users[ownProps.username],
  };
}

function mapDispatchToProps(dispatch) { // (dispatch, ownProps)
  return bindActionCreators({
    getUser: actions.github.getUser,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GithubUserContainer);
