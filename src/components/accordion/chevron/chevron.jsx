import React from 'react';
import cx from 'classnames';
import { FaChevronRight } from 'react-icons/fa';
import styles from './chevron.module.css';

export const Chevron = ({ expanded }) => {
  return expanded ? (
    <FaChevronRight className={cx(styles.chevron, styles.expanded)} />
  ) : (
    <FaChevronRight className={cx(styles.chevron)} />
  );
};
