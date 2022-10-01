import React from 'react';
import PropTypes from 'prop-types';

const Flex = ({
	justifyContent,
  direction,
  wrap,
  gap,
  alignItems,
  height,
  children,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: direction,
        justifyContent,
        flexWrap: wrap ? 'wrap' : 'nowrap',
        gap: gap === false ? 0 : gap === true ? '20px' : gap,
        alignItems,
        height,
      }}
    >
      {children}
    </div>
  );
};

Flex.defaultProps = {
  direction: 'initial',
  alignItems: 'initial',
  justifyContent: 'initial',
  height: 'initial',
  wrap: true,
  gap: false,
  children: null,
};

Flex.propTypes = {
  direction: PropTypes.string,
  alignItems: PropTypes.string,
  justifyContent: PropTypes.string,
  height: PropTypes.string,
  wrap: PropTypes.bool,
  gap: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  children: PropTypes.node,
};

export default Flex;