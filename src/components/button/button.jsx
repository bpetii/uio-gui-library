import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import buttonStyles from './button.module.css';

const Button = ({
  active,
  basic,
  colored,
  disabled,
  label,
  name,
  onClick,
  pill,
  round,
  small,
  width,
  fontSize,
  styles,
}) => {

  const color = (() => {
    if (colored) {
      switch (colored) {
        case 'danger':
        case 'red':
          return buttonStyles.red;
        case 'success':
        case 'green':
          return buttonStyles.green;
        default:
          return buttonStyles.blue;
      }
    }
    return '';
  })();


  return (
    <button
      type="button"
      className={cx(
        buttonStyles.button,
        disabled ? buttonStyles.disabled : '',
        basic ? buttonStyles.basic : '',
        small ? buttonStyles.small : '',
        active ? buttonStyles.active : '',
        color,
        pill ? buttonStyles.pill : '',
        round ? buttonStyles.round : '',
        styles  
      )}
      disabled={disabled}
      name={name}
      onClick={onClick}
      style={{ width, fontSize }}
    >
      {label}
    </button>
  );
};

Button.defaultProps = {
  active: false,
  basic: false,
  colored: false,
  disabled: false,
  label: '',
  name: undefined,
  pill: false,
  round: false,
  small: false,
  styles: '',
  width: '',
  fontSize: '',
  onClick: () => {},
};

Button.propTypes = {
  active: PropTypes.bool,
  basic: PropTypes.bool,
  colored: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  disabled: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  name: PropTypes.string,
  onClick: PropTypes.func,
  round: PropTypes.bool,
  small: PropTypes.bool,
  styles: PropTypes.string,
  width: PropTypes.string,
  pill: PropTypes.bool,
};

export default Button;