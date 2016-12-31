import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';

import Button from 'components/Button';

describe('Button page component', function() {
  it('Should exist', () => {
    let wrapper = shallow(<Button />);
    expect(wrapper).to.exist;
  });

  it('Should be <button> with no props', () => {
    let wrapper = shallow(<Button />);
    expect(wrapper.html()).to.contain('<button');
  });

  // Seamlessly uses <react-router.Link>
  /* TODO React-router v4 + jest makes Link give
   * an error here ... hiding for now
  /*
  it('Should be <a> with `to` prop', () => {
    let wrapper = shallow(<Button to="/test" />);
    expect(wrapper.html()).to.contain('<a');
  });
  */

  it('should have .button class', () => {
    let wrapper = shallow(
      <Button>
        testing
      </Button>
    );

    expect(wrapper.find('.button')).to.have.length(1);
  });

  it('should pass-through class via className (and still have .button class)', () => {
    let wrapper = shallow(
      <Button className="test-class">
        testing
      </Button>
    );

    expect(wrapper.find('.test-class')).to.have.length(1);
    expect(wrapper.find('.button')).to.have.length(1);
  });

  it('should pass on arbitrary props', () => {
    let wrapper = shallow(
      <Button data-arbitrary>
        testing
      </Button>
    );

    expect(wrapper.find('[data-arbitrary]')).to.have.length(1);
  });

  it('should render content/children', () => {
    let wrapper = shallow(
      <Button>
        testing
      </Button>
    );

    expect(wrapper.html()).to.contain('testing')
  });
});
