import React from 'react';
import PropTypes from 'prop-types';

export const Spacer = ({ height, width, flex }) => (
  <div
    style={{
      display: width ? 'inline-block' : 'block',
      flexGrow: flex ? 1 : 0,
      flexShrink: 0,
      height,
      width: width || 'auto',
    }}
  />
);

Spacer.defaultProps = {
  flex: false,
  width: null,
  height: '20px',
};

Spacer.propTypes = {
  flex: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
