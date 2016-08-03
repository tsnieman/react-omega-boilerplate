import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';

import StarButton from 'components/StarButton';

describe('StarButton component', function() {
  it('Should exist', () => {
    let wrapper = shallow(<StarButton />);
    expect(wrapper).to.exist;
  });

  it('Should have Icon', () => {
    let wrapper = shallow(<StarButton />);
    expect(wrapper.find('Icon')).to.exist;
  });

  it('should pass on arbitrary props', () => {
    let wrapper = shallow(
      <StarButton data-arbitrary>
        testing
      </StarButton>
    );

    expect(wrapper.find('[data-arbitrary]')).to.have.length(1);
  });

  it('should render content/children', () => {
    let wrapper = shallow(
      <StarButton>
        testing
      </StarButton>
    );

    expect(wrapper.html()).to.contain('testing')
  });
});
