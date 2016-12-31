import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';

import Wrapper from 'components/Message/Wrapper'
import Body from 'components/Message/Body'
import Actions from 'components/Message/Actions'

describe('Wrapper component', function() {
  it('should render null with no props or children', () => {
    let wrapper = shallow(<Wrapper />);

    // noscript means null when rendered.
    expect(wrapper.html()).to.equal(null);
  });

  it('should have .message-wrapper class', () => {
    let wrapper = shallow(
      <Wrapper>
        <div>testing</div>
      </Wrapper>
    );

    expect(wrapper.find('.message-wrapper')).to.have.length(1);
  });

  it('should pass-through class via className (and still have .message-wrapper class)', () => {
    let wrapper = shallow(
      <Wrapper className="test-class">
        <div>testing</div>
      </Wrapper>
    );

    expect(wrapper.find('.test-class')).to.have.length(1);
    expect(wrapper.find('.message-wrapper')).to.have.length(1);
  });

  it('should pass on arbitrary props', () => {
    let wrapper = shallow(
      <Wrapper data-arbitrary>
        <div>testing</div>
      </Wrapper>
    );

    expect(wrapper.find('[data-arbitrary]')).to.have.length(1);
  });

  it('should only render Message subcomponents (i.e. not a random div)', () => {
    let wrapper = shallow(
      <Wrapper>
        <div>testing</div>
      </Wrapper>
    );

    expect(wrapper.html()).not.to.contain('<div>testing</div>')
  });

  it('should render Body children', () => {
    let wrapper = shallow(
      <Wrapper>
        <Body>testing</Body>
      </Wrapper>
    );

    expect(wrapper.html()).to.contain('message-body')
  });

  it('should render Actions children', () => {
    let wrapper = shallow(
      <Wrapper>
        <Actions>testing</Actions>
      </Wrapper>
    );

    expect(wrapper.html()).to.contain('message-actions')
  });
});
