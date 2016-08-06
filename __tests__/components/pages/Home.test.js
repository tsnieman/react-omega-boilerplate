import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';

import Home from 'components/pages/Home';

describe('Home page component', function() {
  it('Should exist', () => {
    let wrapper = shallow(<Home />);
    expect(wrapper).to.exist;
  });

  it('Should have "Home" on the page', () => {
    let wrapper = shallow(<Home />);
    expect(wrapper.text()).to.contain('Home');
  });
});
