import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';

// TODO not needed..? this was in a buncha examples tho.
// jest.unmock('../../src/components/Card');

import Body from 'components/Card/Body'

describe('Body component', function() {
  it('should render null with no props or children', () => {
    let wrapper = shallow(<Body />);

    // noscript means null when rendered.
    expect(wrapper.html()).to.equal('<noscript></noscript>');
  });

  it('should have .card-body class', () => {
    let wrapper = shallow(
      <Body>
        <div>testing</div>
      </Body>
    );

    expect(wrapper.find('.card-body')).to.have.length(1);
  });

  it('should pass-through class via className (and still have .card-body class)', () => {
    let wrapper = shallow(
      <Body className="test-class">
        <div>testing</div>
      </Body>
    );

    expect(wrapper.find('.test-class')).to.have.length(1);
    expect(wrapper.find('.card-body')).to.have.length(1);
  });

  it('should pass on arbitrary props', () => {
    let wrapper = shallow(
      <Body data-arbitrary>
        <div>testing</div>
      </Body>
    );

    expect(wrapper.find('[data-arbitrary]')).to.have.length(1);
  });

  it('should render content/children', () => {
    let wrapper = shallow(
      <Body>
        <div>testing</div>
      </Body>
    );

    expect(wrapper.html()).to.contain('<div>testing</div>')
  });
});
