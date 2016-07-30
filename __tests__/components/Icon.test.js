import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';

import Icon from 'components/Icon';

describe('Icon page component', function() {
  it('Should exist', () => {
    let wrapper = shallow(<Icon />);
    expect(wrapper).to.exist;
  });
});
