import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './badge.module.css';

const Badge = ({ children, color, title, dot, margin, small }) => {
  const visible = !(title === null && dot === null);
  return (
    <div className={styles.wrapper}>
      {visible && (
        <sup
          className={cx(
            styles.badge,
            title !== null ? styles.label : styles.dot,
            small ? styles.small : '',
            children ? styles.hasChildren : '',
          )}
          style={{ background: color || undefined, margin }}
        >
          {title}
        </sup>
      )}
      {children}
    </div>
  );
};

Badge.defaultProps = {
  children: null,
  color: '',
  title: null,
  dot: null,
  margin: null,
  small: false,
};

Badge.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  dot: PropTypes.bool,
  margin: PropTypes.string,
  small: PropTypes.bool,
};

export default Badge;