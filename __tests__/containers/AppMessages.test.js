import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';

// Components
import { Provider } from 'react-redux';
import AppMessages from 'containers/AppMessages';

// Config
import configureStore from 'store/configureStore';

describe('AppMessages container', function() {
  it('displays AppMessages', () => {
    const fakeStore = configureStore();

    let wrapper = mount(
      <Provider store={fakeStore}>
        <AppMessages />
      </Provider>
    );

    // console.log({ debug: wrapper.debug() });
    expect(wrapper.find('AppMessages')).to.have.length(1);
  });
});
