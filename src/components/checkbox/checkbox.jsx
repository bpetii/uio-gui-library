import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { FaCheck } from 'react-icons/fa';
import styles from './checkbox.module.css';

export const CheckBox = ({
  noMargin,
  tabIndex,
  checked,
  name,
  key,
  label,
  disabled,
  small,
  onChange,
}) => {

  return (
    <div
      className={cx(
        styles.checkbox,
        noMargin ? styles.noMargin : null,
        disabled ? styles.disabled : null,
        small ? styles.small : null,
        !label ? styles.noLabel : null,
      )}
      onClick={(evt) => { onChange(evt) }}
    >
      <input
        type="checkbox"
        tabIndex={tabIndex}
        checked={checked}
        name={name}
        key={key}
        onChange={() => {}}
        disabled={disabled}
      />
      <label htmlFor={name}>
        <FaCheck className={styles.checkmark} />
        {label}
      </label>
    </div>
  );
};

CheckBox.defaultProps = {
  checked: false,
  label: '',
  name: undefined,
  noMargin: false,
  onChange: () => {},
  tabIndex: 0,
  disabled: false,
  small: false,
  key: '',
  value: undefined,
};

CheckBox.propTypes = {
  checked: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string,
  noMargin: PropTypes.bool,
  onChange: PropTypes.func,
  tabIndex: PropTypes.number,
  disabled: PropTypes.bool,
  small: PropTypes.bool,
  key: PropTypes.string, //deprecated
  value: PropTypes.string,
};
