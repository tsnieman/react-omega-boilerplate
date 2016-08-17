import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';

// Components
import { Provider } from 'react-redux';
import GithubUser from 'containers/GithubUser';

// Config
import configureStore from 'store/configureStore';

describe('GithubUser container', function() {
  // TODO unprovided `username` case?

  // TODO come back after loader/spinner is done
  it('displays GithubUser[loading=true] when given a username', () => {
    const fakeStore = configureStore();

    let wrapper = mount(
      <Provider store={fakeStore}>
        <GithubUser username="tsnieman" />
      </Provider>
    );

    expect(wrapper.find('GithubUser').props().loading).to.equal(true);
  });

  it('displays GithubUser when given a user', () => {
    const fakeStore = configureStore();

    let wrapper = mount(
      <Provider store={fakeStore}>
        <GithubUser
          username="tsnieman"
          user={{}}
        />
      </Provider>
    );

    expect(wrapper.find('GithubUser')).to.have.length(1);
  });

  // TODO check that the provided username is actually fetched
  // (TDD would have been good here, as i only noticed that it
  // was always fetching a single user after using the component a bit)
});
