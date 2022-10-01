import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './loader.module.css';

const Loader = ({
  width,
  height,
  text,
  theme,
  fullViewPortSize,
  cover,
  children,
}) => {

  return (
    <div
      className={cx(styles.loader, cover ? styles.cover : '', {
        [styles.fullViewPortSize]: fullViewPortSize,
      })}
      style={{ width, height }}
    >
      <div className={styles.dimmer} style={{backgroundColor: theme}}>
        <div className={styles.content}>
          {children}
          {text !== '' && <div className={styles.text}>{text}</div>}
        </div>
      </div>
    </div>
  );
};

Loader.defaultProps = {
    theme: 'white',
  fullViewPortSize: false,
  cover: false,
  width: null,
  height: null,
  text: '',
  details: '',
  children: null,
};

Loader.propTypes = {
  fullViewPortSize: PropTypes.bool,
  cover: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.string,
  text: PropTypes.string,
  details: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  children: PropTypes.node,
  theme: PropTypes.string,
};

export default Loader;