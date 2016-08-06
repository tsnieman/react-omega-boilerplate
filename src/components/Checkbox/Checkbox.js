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
      checked,
    } = this.state;

    const cleanProps = { ...this.props };
    delete cleanProps.checked; // Checkbox-specific
    delete cleanProps.styles; // CSS modules-specific
    delete cleanProps.children; // input is a void element tag and must neither have
                                // `children` nor use `dangerouslySetInnerHTML`.

    const icon = checked ? 'check-box' : 'check-box-outline-blank';

    return (
      <div
        {...cleanProps}
        styleName="wrapper"
        onClick={this.toggleCheck}
        data-checked={checked}
      >
        <Icon
          icon={icon}
          size="1.4em"
        />
      </div>
    );
  }
}

Checkbox.propTypes = {
  checked: PropTypes.bool,
};

Checkbox.defaultProps = {
  checked: false,
};

export default cssModules(Checkbox, styles);
