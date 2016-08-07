// Basics
import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './Checkbox.css';

// Components
import Icon from 'components/Icon';

class Checkbox extends React.Component {
  constructor() {
    super();

    this.state = {
      checked: false,
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

    return (
      <div
        {...cleanProps}
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
