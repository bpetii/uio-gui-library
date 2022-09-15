import React from 'react';
import PropTypes from 'prop-types';
import styles from './divider.module.css';

const cssAlignClass = (align) => {
  switch (align) {
    case 'right':
        return styles.alignRight;
    case 'left':
      return styles.alignLeft;
    default:
      return '';
  }
};

export const Divider = ({  color, align,margin,children }) => (
  <div
    className={`${styles.divider} ${cssAlignClass(align)}`}
    style={{
      marginTop: margin,
      marginBottom: margin,
      color: color,
    }}
  >
    {children}
  </div>
);

Divider.defaultProps = {
    align: 'center',
    color: '#ddd',
    margin: 20,
};

Divider.propTypes = {
    align: PropTypes.string,
    color: PropTypes.string,
    margin: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
