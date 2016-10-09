/* eslint-disable jsx-a11y/no-static-element-interactions */

// Basics
import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './Checkbox.css';

// Components
import Icon from 'components/Icon';

class Checkbox extends React.Component {
  constructor(props) {
    super();

    this.state = {
      checked: !!props.checked,
    };

    // so value can be got via ref
    this.value = this.state.checked;

    this.toggleCheck = this.toggleCheck.bind(this);
  }

  toggleCheck() {
    const checked = !this.state.checked;

    this.setState({ checked });
    this.value = checked;
  }

  render() {
    const {
      children,
    } = this.props;
    const {
      checked,
    } = this.state;

    const cleanProps = { ...this.props };
    delete cleanProps.checked; // Checkbox-specific
    delete cleanProps.styles; // CSS modules-specific

    const icon = checked ? 'check-box' : 'check-box-outline-blank';

    // TODO TYLER MAKE SURE YOU DIDNT BREAK THIS IN LINTING (div -> input)
    // SINCE LINTING STOPS COMPILATION....
    // TODO MAYBE SEPARATE LINTING FROM COMPLIATION.
    // PLAIN ESLINT WHEN APP IS RUNNING? NEW NPM CMD? IDK WELL SEE! STAY TUNED FOLKS.
    return (
      <div
        {...cleanProps}
        type="button"
        styleName="wrapper"
        onClick={this.toggleCheck}
        data-checked={checked}
      >
        <Icon icon={icon}>{children}</Icon>
      </div>
    );
  }
}

Checkbox.propTypes = {
  children: PropTypes.any,
  checked: PropTypes.bool,
};

Checkbox.defaultProps = {
  checked: false,
};

export default cssModules(Checkbox, styles);

/* eslint-enable jsx-a11y/no-static-element-interactions */
