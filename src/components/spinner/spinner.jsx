import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './spinner.module.css';

const Spinner = ({ small, colored, tiny }) => {
  return (
    <div
      className={cx(
        styles.spinner,
        colored ? styles.colored : '',
        small ? styles.small : '',
        tiny ? styles.tiny : '',
      )}
    >
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};

Spinner.defaultProps = {
  colored: false,
  small: false,
  tiny: false,
};

Spinner.propTypes = {
  colored: PropTypes.bool,
  small: PropTypes.bool,
  tiny: PropTypes.bool,
};

export default Spinner;