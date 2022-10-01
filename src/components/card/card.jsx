import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './card.module.css';

const Card = ({
  bordered,
  heading,
  children,
  margin,
  padding,
  raised,
}) => {
  return (
    <div
      className={cx(
        styles.card,
        bordered ? styles.bordered : '',
        raised ? styles.raised : '',
      )}
      style={{ margin }}
    >
      {heading ? <div className={cx(styles.cardHeader)}>{heading}</div> : null}
      <div
        className={cx(
          styles.cardContent,
          heading ? styles.cardContentBorderTop : '',
          padding ? styles.padding : '',
        )}
      >
        {children}
      </div>
    </div>
  );
};

Card.defaultProps = {
  bordered: true,
  heading: null,
  margin: '0',
  padding: true,
  raised: false,
};

Card.propTypes = {
  bordered: PropTypes.bool,
  heading: PropTypes.node,
  margin: PropTypes.string,
  padding: PropTypes.bool,
  raised: PropTypes.bool,
};

export default Card;