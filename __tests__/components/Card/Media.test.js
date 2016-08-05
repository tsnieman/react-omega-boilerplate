import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';

import Media from 'components/Card/Media'

describe('Media component', function() {
  it('should render null with no props or children', () => {
    let wrapper = shallow(<Media />);

    // noscript means null when rendered.
    expect(wrapper.html()).to.equal('<noscript></noscript>');
  });

  it('should have .card-media class', () => {
    let wrapper = shallow(
      <Media>
        testing
      </Media>
    );

    expect(wrapper.find('.card-media')).to.have.length(1);
  });

  it('should pass-through class via className (and still have .card-media class)', () => {
    let wrapper = shallow(
      <Media className="test-class">
        testing
      </Media>
    );

    expect(wrapper.find('.test-class')).to.have.length(1);
    expect(wrapper.find('.card-media')).to.have.length(1);
  });

  it('should pass on arbitrary props', () => {
    let wrapper = shallow(
      <Media data-arbitrary>
        testing
      </Media>
    );

    expect(wrapper.find('[data-arbitrary]')).to.have.length(1);
  });

  it('should render content/children', () => {
    let wrapper = shallow(
      <Media>
        testing
      </Media>
    );

    expect(wrapper.html()).to.contain('testing')
  });
});
