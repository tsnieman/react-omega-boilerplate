import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';

import IconButton from 'components/IconButton';

describe('IconButton component', function() {
  it('Should exist', () => {
    let wrapper = shallow(<IconButton />);
    expect(wrapper).to.exist;
  });

  it('Should have Icon', () => {
    let wrapper = shallow(<IconButton />);
    expect(wrapper.find('Icon')).to.exist;
  });

  it('should pass on arbitrary props', () => {
    let wrapper = shallow(
      <IconButton data-arbitrary>
        testing
      </IconButton>
    );

    expect(wrapper.find('[data-arbitrary]')).to.have.length(1);
  });

  it('should render content/children', () => {
    let wrapper = shallow(
      <IconButton>
        testing
      </IconButton>
    );

    expect(wrapper.html()).to.contain('testing')
  });
});
