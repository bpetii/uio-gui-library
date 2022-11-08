import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import {FaInfoCircle} from 'react-icons/fa';
import styles from './card.module.css';
import Tooltip from '../tooltip/tooltip.jsx';

const Card = ({
  bordered,
  heading,
  children,
  margin,
  padding,
  info,
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
      {heading ? (<div className={cx(styles.cardHeader)}>
        {heading}
        <div className={styles.icons}>
          {info && (
            <Tooltip text={info}>
                  <FaInfoCircle className={styles.icon} />
            </Tooltip>
          )}
        </div>
      </div>) : null}
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