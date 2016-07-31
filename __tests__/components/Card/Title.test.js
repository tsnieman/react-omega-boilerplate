import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';

import Title from 'components/Card/Title'

describe('Title component', function() {
  it('should render null with no props or children', () => {
    let wrapper = shallow(<Title />);

    // noscript means null when rendered.
    expect(wrapper.html()).to.equal('<noscript></noscript>');
  });

  it('should have .card-title class', () => {
    let wrapper = shallow(
      <Title>
        testing
      </Title>
    );

    expect(wrapper.find('.card-title')).to.have.length(1);
  });

  it('should pass-through class via className (and still have .card-title class)', () => {
    let wrapper = shallow(
      <Title className="test-class">
        testing
      </Title>
    );

    expect(wrapper.find('.test-class')).to.have.length(1);
    expect(wrapper.find('.card-title')).to.have.length(1);
  });

  it('should pass on arbitrary props', () => {
    let wrapper = shallow(
      <Title data-arbitrary>
        testing
      </Title>
    );

    expect(wrapper.find('[data-arbitrary]')).to.have.length(1);
  });

  it('should render content/children', () => {
    let wrapper = shallow(
      <Title>
        testing
      </Title>
    );

    expect(wrapper.html()).to.contain('testing')
  });
});
