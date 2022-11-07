import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { Label } from '../../index';
import styles from './field.module.css';

const Field = ({
  label,
  labelLeft,
  labelWidth,
  info,
  children,
}) => {
  return (
    <div
      className={cx(styles.field, labelLeft ? styles.labelLeft : '')}
    >
      {(label || labelLeft) && (
        <Label
          label={label}
          width={labelWidth}
          labelLeft={labelLeft}
          info={info}
        />
      )}
      <div className={styles.fieldInput}>{children}</div>
    </div>
  );
};

Field.defaultProps = {
  label: null,
  labelLeft: false,
  labelWidth: 'auto',
  info: ''
};

Field.propTypes = {
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node,
  ]),
  /** Moves the label to the left of the input */
  labelLeft: PropTypes.bool,
  info: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  labelWidth: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Field;