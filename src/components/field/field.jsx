import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { Label } from '../../index';
import styles from './field.module.css';

const Field = ({
  label,
  labelLeft,
  labelWidth,
  children,
  helpText,
  helpTextMaxWidth,
}) => {
  return (
    <div
      className={cx(styles.field, labelLeft ? styles.labelLeft : '')}
    >
      {(label || labelLeft) && (
        <Label
          label={label}
          width={labelWidth}
          helpText={helpText}
          helpTextMaxWidth={helpTextMaxWidth}
          labelLeft={labelLeft}
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
};

Field.propTypes = {
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node,
  ]),
  /** Moves the label to the left of the input */
  labelLeft: PropTypes.bool,
  labelWidth: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Field;