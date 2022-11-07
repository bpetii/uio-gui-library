import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import styles from './label.module.css';
import {FaInfoCircle} from 'react-icons/fa';
import Tooltip from '../tooltip/tooltip.jsx';

const Label = ({
  label,
  width,
  info,
  labelLeft,
}) => {
  return (
    <div className={cx(styles.label, labelLeft ? styles.labelLeft : '')}>
      <label style={{ width: width || '' }}>
        {label}
        <div className={styles.icons}>
          {info && (
            <Tooltip text={info}>
                  <FaInfoCircle className={styles.icon} />
            </Tooltip>
          )}
        </div>
      </label>
    </div>
  );
};

Label.defaultProps = {
  label: null,
  width: 'auto',
  labelLeft: false,
  info: '',
};

Label.propTypes = {
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node,
  ]),
  info: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  width: PropTypes.string,
  labelLeft: PropTypes.bool,
};

export default Label;
