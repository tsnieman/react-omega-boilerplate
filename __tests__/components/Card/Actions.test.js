import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';

import Actions from 'components/Card/Actions'

describe('Actions component', function() {
  it('should render null with no props or children', () => {
    let wrapper = shallow(<Actions />);

    // noscript means null when rendered.
    expect(wrapper.html()).to.equal('<noscript></noscript>');
  });

  it('should have .card-actions class', () => {
    let wrapper = shallow(
      <Actions>
        testing
      </Actions>
    );

    expect(wrapper.find('.card-actions')).to.have.length(1);
  });

  it('should pass-through class via className (and still have .card-actions class)', () => {
    let wrapper = shallow(
      <Actions className="test-class">
        testing
      </Actions>
    );

    expect(wrapper.find('.test-class')).to.have.length(1);
    expect(wrapper.find('.card-actions')).to.have.length(1);
  });

  it('should pass on arbitrary props', () => {
    let wrapper = shallow(
      <Actions data-arbitrary>
        testing
      </Actions>
    );

    expect(wrapper.find('[data-arbitrary]')).to.have.length(1);
  });

  it('should render content/children', () => {
    let wrapper = shallow(
      <Actions>
        testing
      </Actions>
    );

    expect(wrapper.html()).to.contain('testing')
  });
});
