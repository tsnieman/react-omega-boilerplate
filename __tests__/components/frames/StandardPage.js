import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';

import StandardPage from 'components/frames/StandardPage';

describe('StandardPage frame component', function() {
  it('Should exist', () => {
    let wrapper = shallow(<StandardPage />);
    expect(wrapper).to.exist;
  });

  it('should render content/children', () => {
    let wrapper = shallow(
      <StandardPage>
        testing
      </StandardPage>
    );

    expect(wrapper.html()).to.contain('testing')
  });
});
