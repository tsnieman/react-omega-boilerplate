import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';

import Button from 'components/Button';

describe('Button page component', function() {
  it('Should exist', () => {
    let wrapper = shallow(<Button />);
    expect(wrapper).to.exist;
  });

  it('Should be <button> with no props', () => {
    let wrapper = shallow(<Button />);
    expect(wrapper.html()).to.contain('<button');
  });

  // Seamlessly uses <react-router.Link>
  it('Should be <a> with `to` prop', () => {
    let wrapper = shallow(<Button to="/test" />);
    expect(wrapper.html()).to.contain('<a');
  });
});
