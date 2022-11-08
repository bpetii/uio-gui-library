import React from 'react';
import PropTypes from 'prop-types';
import { Arrow } from 'react-laag';
import cx from 'classnames';
import styles from './tooltip.module.css';
import { isArray } from 'lodash';

export const TooltipLayer = ({
  text,
  error,
  warning,
  layerProps,
  arrowProps,
}) => {
  const convertArrayToLines= (text) => {
    if (isArray(text)) {
      return (<>
        {text.map(line => <>{line} <br/> </>)}
      </>)
    } else {
      return text;
    }
  }
  return (
    <div
      className={cx(
        styles.tooltip,
        error ? styles.error : warning ? styles.warning : '',
      )}
      {...layerProps} // eslint-disable-line react/jsx-props-no-spreading
    >
      <div>{convertArrayToLines(text)}</div>
      <Arrow
        {...arrowProps} // eslint-disable-line react/jsx-props-no-spreading
        size={6}
      />
    </div>
  );
};

TooltipLayer.defaultProps = {
  text: '',
  error: false,
  warning: false,
  layerProps: {
    style: {
      position: 'fixed',
    },
  },
  arrowProps: {
    style: {
      top: '100%',
      bottom: null,
      left: '50%',
      right: null,
      position: 'absolute',
    },
  },
};

TooltipLayer.propTypes = {
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node,
  ]),
  error: PropTypes.bool,
  warning: PropTypes.bool,
  layerProps: PropTypes.object,
  arrowProps: PropTypes.object,
};
