import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import styles from './label.module.css';

const Label = ({
  label,
  width,
  labelLeft,
}) => {
  return (
    <div className={cx(styles.label, labelLeft ? styles.labelLeft : '')}>
      <label style={{ width: width || '' }}>
        {label}
      </label>
    </div>
  );
};

Label.defaultProps = {
  label: null,
  width: 'auto',
  labelLeft: false,
};

Label.propTypes = {
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node,
  ]),
  width: PropTypes.string,
  labelLeft: PropTypes.bool,
};

export default Label;
