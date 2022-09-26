import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { FaCheck } from "react-icons/fa";
import styles from "./checkbox.module.css";

export const CheckBox = ({
  tabIndex,
  checked,
  name,
  key,
  label,
  disabled,
  onChange,
}) => {
  return (
    <div
      className={cx(styles.checkbox, disabled ? styles.disabled : null)}
      onClick={(evt) => {
        onChange(evt);
      }}
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
  label: "",
  name: undefined,
  onChange: () => {},
  tabIndex: 0,
  disabled: false,
  key: "",
  value: undefined,
};

CheckBox.propTypes = {
  value: PropTypes.string,
  checked: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  tabIndex: PropTypes.number,
  disabled: PropTypes.bool,
  key: PropTypes.string,
};
