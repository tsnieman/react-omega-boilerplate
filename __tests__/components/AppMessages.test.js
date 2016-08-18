import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';

import AppMessages from 'components/AppMessages';

const FAKE_MESSAGES = [
  {
    body: {},
  },
];

describe('AppMessages component', function() {
  it('should render null with no props', () => {
    let wrapper = shallow(<AppMessages />);

    // noscript means null when rendered.
    expect(wrapper.html()).to.equal('<noscript></noscript>');
  });

  it('should render messages when given `messages` and `removeMessage` props', () => {
    const REAL_FAKE_MESSAGES = [
      { body: '1st' },
      { body: '2nd' },
    ];

    let wrapper = shallow(
      <AppMessages
        messages={REAL_FAKE_MESSAGES}
        removeMessage={() => {}}
      />
    );

    expect(wrapper.find('.app-messages-wrapper').children()).to.have.length(REAL_FAKE_MESSAGES.length);
  });

  it('should have .app-messages-wrapper class', () => {
    let wrapper = shallow(
      <AppMessages
        messages={FAKE_MESSAGES}
        removeMessage={() => {}}
      >
        <div>testing</div>
      </AppMessages>
    );

    expect(wrapper.find('.app-messages-wrapper')).to.have.length(1);
  });

  it('should pass-through class via className (and still have .app-messages-wrapper class)', () => {
    let wrapper = shallow(
      <AppMessages
        className="test-class"
        messages={FAKE_MESSAGES}
        removeMessage={() => {}}
      />
    );

    expect(wrapper.find('.test-class')).to.have.length(1);
    expect(wrapper.find('.app-messages-wrapper')).to.have.length(1);
  });

  it('should pass on arbitrary props', () => {
    let wrapper = shallow(
      <AppMessages
        data-arbitrary
        messages={FAKE_MESSAGES}
        removeMessage={() => {}}
      />
    );

    expect(wrapper.find('[data-arbitrary]')).to.have.length(1);
  });


  // TODO test "dismiss" button
});