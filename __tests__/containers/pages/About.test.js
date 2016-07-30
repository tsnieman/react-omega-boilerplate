import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';

// Components
import { Provider } from 'react-redux';
import About from 'containers/pages/About';

// Config
import configureStore from 'store/configureStore';

describe('About page container', function() {
  it('displays the About page component', () => {
    const fakeStore = configureStore();

    let wrapper = mount(
      <Provider store={fakeStore}>
        <About />
      </Provider>
    );

    expect(wrapper.find('About')).to.have.length(1);
  });
});
