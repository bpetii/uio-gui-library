import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './page.module.css';

const Page = ({ children, scroll, left, top, padding, bottom }) => {
  return (
    <div
      className={cx(styles.page, scroll ? styles.scroll : '')}
      style={{ left, padding , top, bottom }}
    >
      {children}
    </div>
  );
};

Page.defaultProps = {
  children: null,
  padding: '20px',
  left: '70px',
  scroll: true,
  top: '60px',
  bottom: '75px'
};

Page.propTypes = {
  children: PropTypes.node,
  padding: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
    PropTypes.number,
  ]),
  left: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  scroll: PropTypes.bool,
  top: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default Page;