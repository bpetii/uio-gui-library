import React from 'react';
import PropTypes from 'prop-types';
import styles from './title.module.css';

export const Title = (props) => {
  const { colSpan, name } = props;
  return name ? (
    <tr>
      <th colSpan={colSpan} className={styles.cellWrapper}>
        <div className={styles.title}>
          <div>{name}</div>
        </div>
      </th>
    </tr>
  ) : null;
};

Title.defaultProps = {
  name: null,
};

Title.propTypes = {
  colSpan: PropTypes.number.isRequired,
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
