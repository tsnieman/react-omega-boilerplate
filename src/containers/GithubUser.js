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

  // TODO if the component unmounts before the
  // getUser action finishes (i.e. a situation like
  // going to a different page), you'll get a warning
  // in the browser console. how to avoid? does it matter enough?
  componentDidMount() {
    // Get user if not provided (i.e. not in store).
    if (!this.props.user) {
      this.props.getUser(this.props.username, {
        // TODO onFailure/onSuccess set local state.loading = false
        onSuccess: (createdUser) => {
          console.log('onSuccess!', createdUser); // eslint-disable-line no-console
          this.setState({ isFetching: false });
        },

        onFailure: (error) => {
          console.log('onFailure!', error); // eslint-disable-line no-console
          this.setState({
            isFetching: false,
            error,
          });
        },

        // Log action errors as app messages.
        // errorMessage: true,
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
