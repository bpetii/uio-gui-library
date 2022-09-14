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
        case 'muted':
          return buttonStyles.muted;
        default:
          return buttonStyles.orange;
      }
    }
    return '';
  })();


  return (
    <button
      type="button"
      className={cx(
        buttonStyles.button,
        active ? buttonStyles.active : '',
        basic ? buttonStyles.basic : '',
        color,
        disabled || buttonStyles.disabled,
        pill ? buttonStyles.pill : '',
        round ? buttonStyles.round : '',
        small ? buttonStyles.small : '',
        styles,
      )}
      disabled={disabled}
      name={name}
      onClick={onClick}
      style={{ width }}
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
  icon: null,
  label: '',
  name: undefined,
  pill: false,
  round: false,
  small: false,
  styles: '',
  width: '',
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

export default Button