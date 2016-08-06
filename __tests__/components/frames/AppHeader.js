import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';

import AppHeader from 'components/frames/AppHeader';

describe('AppHeader frame component', function() {
  it('Should exist', () => {
    let wrapper = shallow(<AppHeader />);
    expect(wrapper).to.exist;
  });

  it('should render content/children', () => {
    let wrapper = shallow(
      <AppHeader>
        testing
      </AppHeader>
    );

    expect(wrapper.html()).to.contain('testing')
  });
});
