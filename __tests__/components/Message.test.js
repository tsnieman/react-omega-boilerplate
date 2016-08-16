import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';

import Message from 'components/Message';

describe('Message component', function() {
  it('Should exist', () => {
    let wrapper = shallow(<Message />);
    expect(wrapper).to.exist;
  });

  it('should pass on arbitrary props', () => {
    let wrapper = shallow(
      <Message data-arbitrary>
        testing
      </Message>
    );

    expect(wrapper.find('[data-arbitrary]')).to.have.length(1);
  });

  it('should render content/children', () => {
    let wrapper = shallow(
      <Message>
        testing
      </Message>
    );

    expect(wrapper.html()).to.contain('testing')
  });
});
