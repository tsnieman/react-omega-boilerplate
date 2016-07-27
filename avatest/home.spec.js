import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

const Home = require('../src/components/pages/Home').default;

describe('CSS Modules', function() {
  // TODO more of a styleName/css test, not a 'Home page component' test.
  it('styleName becomes expected className ("home")', () => {
    let wrapper = shallow(<Home />);
    expect(wrapper.props().className).to.equal('page')
  });
});
