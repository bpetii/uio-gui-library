import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './message.module.css';
import { useState } from 'react';

const Details = ({ details, visible, onClick }) => {
  return (
    <div>
      <div
        className={cx(styles.legendToggle)}
        onClick={() => onClick(!visible)}
      >
        {visible ? 'Hide details' : 'Show details'}
      </div>
      {visible ? <div className={styles.detailsText}>{details}</div> : null}
    </div>
  );
};


const Message = ({ message }) => {
  const {
    visible,
    type,
    heading,
    content,
    details,
    width,
    maxHeight,
  } = message;
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);
  return (
    <>
      {visible ? (
        <div
          className={cx(
            styles.container,
            width ? styles.block : null,
            type === 'Success'
              ? styles.success
              : type === 'Warning'
              ? styles.warning
              : type === 'Error'
              ? styles.error
              : styles.info,
          )}
          style={{ width, maxHeight }}
        >
          <div className={styles.content}>
            {heading ? <div className={styles.heading}>{heading}</div> : null}
            <div>{content}</div>
            {details ? (
              <Details
                details={details}
                visible={isDetailsVisible}
                onClick={setIsDetailsVisible}
              />
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
};

const messageShape = PropTypes.shape({
  visible: PropTypes.bool,
  type: PropTypes.oneOf(['Info', 'Success', 'Warning', 'Error']),
  heading: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node,
  ]),
  details: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node,
  ]),
  onClose: PropTypes.func,
  width: PropTypes.string,
  maxHeight: PropTypes.string,
});

Message.propTypes = {
  message: messageShape.isRequired,
};

export default Message;