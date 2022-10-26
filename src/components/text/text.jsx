import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './text.module.css';

const Text = ({
  children,
  bold,
  center,
  link,
  muted,
  onClick,
  small,
  color
}) => {
  return (
    <span
      className={cx(
        styles.text,
        bold && styles.bold,
        center && styles.center,
        link && styles.link,
        muted && styles.muted,
        onClick && styles.clickable,
        small && styles.small,
      )}
      style={{color:color}}
      onClick={onClick}
    >
      {children}
    </span>
  );
};

Text.defaultProps = {
  bold: false,
  center: false,
  link: false,
  muted: false,
  onClick: null,
  small: false,
};

Text.propTypes = {
  bold: PropTypes.bool,
  center: PropTypes.bool,
  link: PropTypes.bool,
  muted: PropTypes.bool,
  onClick: PropTypes.func,
  small: PropTypes.bool,
};

export default Text;