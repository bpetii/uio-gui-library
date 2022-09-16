import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './toggle.module.css';

export const Toggle = ({
  name,
  label,
  checked,
  disabled,
  small,
  onChange,
  noMargin,
}) => {

  return (
    <div
      className={cx(
        styles.toggle,
        noMargin ? styles.noMargin : null,
        small ? styles.small : null,
        disabled ? styles.disabled : null,
      )}
      onClick={(evt) => {
        evt.target.checked = !checked;
        evt.target.name = name;
        evt.target.value = !checked;
        onChange(evt);
      }}
    >
      <input
        name={name}
        value={checked}
        type="checkbox"
        disabled={disabled}
        checked={checked}
        onChange={() => {}}
      />
      <label>{label}</label>
    </div>
  );
};

Toggle.defaultProps = {
  name: undefined,
  label: null,
  noMargin: false,
  disabled: false,
  small: false,
  checked: false,
};

Toggle.propTypes = {
  name: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  noMargin: PropTypes.bool,
  label: PropTypes.string,
  small: PropTypes.bool,
  checked: PropTypes.bool,
};
