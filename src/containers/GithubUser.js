// Basics
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from 'actions';

// Components
import GithubUser from 'components/GithubUser';

// TODO use recompose? lifecycle() + withState()?
class GithubUserContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      isFetching: true,
      error: null,
    };
  }

  componentDidMount() {
    // Get user if not provided (i.e. not in store).
    if (!this.props.user) {
      // this.setState({ loading: true });
      this.props.getUser(this.props.username, {
        // TODO onFailure/onSuccess set local state.loading = false
        onSuccess: (createdUser) => {
          this.setState({ isFetching: false });
          console.log('onSuccess!', createdUser);
        },

        onFailure: (error) => {
          this.setState({
            isFetching: false,
            error,
          });
          console.log('onFailure!', error);
        },
      });
    }
  }

  render() {
    const { user } = this.props;

    if (!user) {
      const hasError = !!this.state.error;
      const isLoading = (!user || this.state.isFetching) && !hasError;

      return (
        <GithubUser
          loading={isLoading}
        />
      );
    }

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
