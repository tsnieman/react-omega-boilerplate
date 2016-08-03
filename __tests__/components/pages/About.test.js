import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';

import About from 'components/pages/About';

// TODO test for required 'users' prop?

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
