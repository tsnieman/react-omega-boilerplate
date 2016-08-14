import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';

import BodyText from 'components/BodyText';

describe('BodyText component', function() {
  it('Should exist', () => {
    let wrapper = shallow(<BodyText />);
    expect(wrapper).to.exist;
  });

  it('should pass on arbitrary props', () => {
    let wrapper = shallow(
      <BodyText data-arbitrary>
        testing
      </BodyText>
    );

    expect(wrapper.find('[data-arbitrary]')).to.have.length(1);
  });

  it('should render content/children', () => {
    let wrapper = shallow(
      <BodyText>
        testing
      </BodyText>
    );

    expect(wrapper.html()).to.contain('testing')
  });
});
