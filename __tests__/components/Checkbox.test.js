import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';

import Checkbox from 'components/Checkbox';

describe('Checkbox component', function() {
  it('Should exist', () => {
    let wrapper = shallow(<Checkbox />);
    expect(wrapper).to.exist;
  });

  it('should pass on arbitrary props', () => {
    let wrapper = shallow(
      <Checkbox data-arbitrary />
    );

    expect(wrapper.find('[data-arbitrary]')).to.have.length(1);
  });

  it('should not render content/children', () => {
    let wrapper = shallow(
      <Checkbox>
        testing
      </Checkbox>
    );

    expect(wrapper.html()).to.not.contain('testing');
  });

  it('should be [data-checked="true"] when checked', () => {
    let wrapper = shallow(
      <Checkbox />
    );

    expect(wrapper.html()).to.contain('data-checked="false"');
    expect(wrapper.html()).to.not.contain('data-checked="true"');
    wrapper.simulate('click');
    expect(wrapper.html()).to.contain('data-checked="true"');
    expect(wrapper.html()).to.not.contain('data-checked="false"');
  });

  it('TODO blah', () => {
    let wrapper = mount(
      <Checkbox />
    );

    let value = wrapper.instance().value;
    expect(value).to.equal(false);
    wrapper.simulate('click');
    value = wrapper.instance().value;
    expect(value).to.equal(true);
  });

  // TODO verify checked vs not check visual difference (compare html?)
});
