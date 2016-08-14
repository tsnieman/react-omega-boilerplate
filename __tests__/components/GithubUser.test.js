import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';

import GithubUser from 'components/GithubUser';

// TODO test for required 'users' prop?

describe('GithubUser page component', function() {
  it('Should render "user not found" message when passed no props', () => {
    let wrapper = shallow(<GithubUser />);
    expect(wrapper.text().indexOf('not found')).to.be.above(-1);
  });

  it('Should exist when given a `user` object', () => {
    let wrapper = shallow(<GithubUser user={{}} />);
    expect(wrapper).to.exist;
  });
});
