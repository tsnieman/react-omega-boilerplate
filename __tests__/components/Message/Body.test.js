import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';

import Body from 'components/Message/Body'

describe('Body component', function() {
  it('should render null with no props or children', () => {
    let wrapper = shallow(<Body />);

    // noscript means null when rendered.
    expect(wrapper.html()).to.equal('<noscript></noscript>');
  });

  it('should have .message-body class', () => {
    let wrapper = shallow(
      <Body>
        testing
      </Body>
    );

    expect(wrapper.find('.message-body')).to.have.length(1);
  });

  it('should pass-through class via className (and still have .message-body class)', () => {
    let wrapper = shallow(
      <Body className="test-class">
        testing
      </Body>
    );

    expect(wrapper.find('.test-class')).to.have.length(1);
    expect(wrapper.find('.message-body')).to.have.length(1);
  });

  it('should pass on arbitrary props', () => {
    let wrapper = shallow(
      <Body data-arbitrary>
        testing
      </Body>
    );

    expect(wrapper.find('[data-arbitrary]')).to.have.length(1);
  });

  it('should render content/children', () => {
    let wrapper = shallow(
      <Body>
        testing
      </Body>
    );

    expect(wrapper.html()).to.contain('testing')
  });
});
