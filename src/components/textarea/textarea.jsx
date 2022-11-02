import React  from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './textarea.module.css';

const TextArea = ({
  name,
  value,
  placeholder,
  disabled,
  onChange,
  onKeyPress,
  onFocus,
  onBlur,
  error,
  warning,
  resize,
}) => {
  return (
    <textarea
    className={cx(
      styles.textarea,
      error ? styles.error : '',
      warning ? styles.warning : '',
    )}
    name={name}
    value={value}
    placeholder={placeholder}
    onChange={onChange}
    disabled={disabled}
    onKeyPress={onKeyPress}
    onFocus={onFocus}
    onBlur={onBlur}
    style={{ resize }}
  />
  );
};

TextArea.defaultProps = {
    error: null,
    warning: null,
    name: undefined,
    onChange: () => {},
    onKeyPress: () => {},
    onFocus: () => {},
    onBlur: () => {},
    placeholder: '',
    value: '',
    disabled: false,
    resize: undefined,
};

TextArea.propTypes = {
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
      onChange: PropTypes.func,
      onKeyPress: PropTypes.func,
      onFocus: PropTypes.func,
      onBlur: PropTypes.func,
      placeholder: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      disabled: PropTypes.bool,
      resize: PropTypes.string,
};

export default TextArea;