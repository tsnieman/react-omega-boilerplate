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
  it('displays "Loading" when given a username', () => {
    const fakeStore = configureStore();

    let wrapper = mount(
      <Provider store={fakeStore}>
        <GithubUser username="tsnieman" />
      </Provider>
    );

    expect(wrapper.text().indexOf('Loading')).to.be.above(-1);
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

    // console.log({ wrapper: wrapper.debug() });
    expect(wrapper.find('GithubUser')).to.have.length(1);
  });
});
