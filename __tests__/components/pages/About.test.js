import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';

// TODO not needed..? this was in a buncha examples tho.
// jest.unmock('../../../src/components/pages/About');

const About = require('../../../src/components/pages/About').default;

describe('About page component', function() {
  it('Should exist', () => {
    let wrapper = shallow(<About />);
    expect(wrapper).to.exist;
  });

  it('Should have "About" on the page', () => {
    let wrapper = shallow(<About />);
    expect(wrapper.text()).to.contain('About');
  });
});
