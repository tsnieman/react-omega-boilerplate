import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';

// TODO not needed..? this was in a buncha examples tho.
// jest.unmock('../src/components/pages/Home');

const Home = require('../src/components/pages/Home').default;

describe('CSS Modules', function() {
  // TODO more of a styleName/css test, not a 'Home page component' test.
  it('styleName becomes expected className', () => {
    let wrapper = shallow(<Home />);

    // TODO use https://github.com/webpack/loader-utils
    // to match the transformed style module name.
    // expect(wrapper.props().className).to.equal('page')

    expect(wrapper.props().className).to.exist
  });
});
