import React from 'react';
import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';
import styles from './dialog.module.css';
import cx from 'classnames';

const Dialog = ({ dialog }) => {
  const {
    heading,
    content,
    footer,
    scroll,
    width,
    height,
    onClose,
  } = dialog;
  return (
    <div
      className={cx(
        styles.dialog,
        width ? styles.inline : null,
        scroll ? styles.scroll : null,
      )}
      style={{ width, height }}
    >
      <div className={styles.header}>
        <h2>
          {heading}
        </h2>
        {onClose ? (
          <div className={styles.dismiss}>
            <FaTimes onClick={onClose} />
          </div>
        ) : null}
      </div>
      <div className={styles.content} style={{ padding: 20 }}>
        {content}
      </div>
      {footer && <div className={styles.footer}>{footer}</div>}
    </div>
  );
};

const dialogShape = PropTypes.shape({
  heading: PropTypes.string,
  contentPadding: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node,
  ]).isRequired,
  footer: PropTypes.node,
  width: PropTypes.string,
  height: PropTypes.string,
  onClose: PropTypes.func,
  bordered: PropTypes.bool,
});

Dialog.propTypes = {
  dialog: dialogShape.isRequired,
};

export default Dialog;
