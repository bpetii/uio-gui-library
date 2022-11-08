import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './input.module.css';

const Input = forwardRef(
  (
    {
      error,
      width: propWidth,
      small,
      onChange,
      size,
      placeholder,
      value,
      onKeyPress,
      onFocus,
      onBlur,
      name,
      type,
      tabIndex,
      disabled,
      right,
      warning,
    },
    ref,
  ) => {
    const width = propWidth || (size ? 'auto' : '100%');

    return (
      <div style={{ width }}>
          <input
            autocomplete="off"
            type={type}
            size={size || 20}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onKeyPress={onKeyPress}
            onFocus={onFocus}
            onBlur={onBlur}
            name={name}
            tabIndex={tabIndex}
            autoComplete="off"
            disabled={disabled}
            className={cx(
              styles.input,
              error ? styles.error : warning ? styles.warning : '',
              right ? styles.right : '',
              small ? styles.small : '',
            )}
            style={{ width }}
            ref={ref}
          />
      </div>
    );
  },
);

Input.defaultProps = {
  error: null,
  warning: null,
  name: undefined,
  type: 'text',
  onChange: () => {},
  onKeyPress: () => {},
  onFocus: () => {},
  onBlur: () => {},
  placeholder: '',
  small: false,
  tabIndex: 0,
  value: '',
  disabled: false,
  right: false,
  width: undefined,
  size: null,
};

Input.propTypes = {
  error: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node,
  ]),
  warning: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node,
  ]),
  name: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  small: PropTypes.bool,
  placeholder: PropTypes.string,
  tabIndex: PropTypes.number,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
  right: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.number,
};

export default Input;