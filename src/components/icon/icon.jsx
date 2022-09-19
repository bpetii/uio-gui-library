import React, { isValidElement } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { ReactSVG } from 'react-svg';
import styles from './icon.module.css';

export const Icon = ({ icon, onClick, clickable, color, size, }) => {
  return (
    <div
      className={cx(
        styles.wrapper,
        clickable?  styles.clickable: '',
      )}
      style={{
        color,
        fill: color,
        fontSize: size || 'inherit',
        width: size || 'auto',
        height: size || 'auto',
      }}
      onClick={(evt) => (clickable ? onClick(evt) : {})}
    >
      {isValidElement(icon) ? (
        icon //react-icon
      ) : typeof icon === 'string' && icon.includes('.svg') ? (
        <ReactSVG
          className={styles.customSvg}
          beforeInjection={(svg) => {
            if (size) {
              svg.setAttribute('width', size);
              svg.setAttribute('height', size);
            }
          }}
          src={icon}
        /> //SVG
      ) : typeof icon === 'string' && icon.includes('.png') ? (
        <img alt="icon" className={styles.customPng} src={icon} />
      ) : null}
    </div>
  );
};

Icon.defaultProps = {
  onClick: null,
};

Icon.propTypes = {
    onClick: PropTypes.func,
  icon: PropTypes.oneOfType([
    PropTypes.node, //JSX (react-icons)
    PropTypes.string, //SVG (or deprecated string name)
  ]).isRequired,
};
