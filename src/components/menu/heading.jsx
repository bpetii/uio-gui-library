import React from 'react';
import styles from './menu.module.css';

export const Heading = ({ label }) => (
  <div
    onClick={(evt) => evt.stopPropagation()}
    className={styles.heading}
  >
    {label}
  </div>
);
