import React, { isValidElement } from 'react';
import PropTypes from 'prop-types';
import ResizeObserver from 'resize-observer-polyfill';
import { useLayer, useHover } from 'react-laag';
import { TooltipLayer } from './tooltip-layer.jsx';

const Tooltip = ({
  children,
  text,
  error,
  placement,
  possiblePlacements,
  enabled,
  warning,
  triggerOffset,
  flex,
  forceOpen,
}) => {
  const visible = enabled && (isValidElement(text) || text.length);

  const [isOver, hoverProps, forceClose] = useHover({
    delayEnter: 100,
    delayLeave: 100,
  });

  const isOpen = !visible ? false : forceOpen ? true : isOver;

  const { renderLayer, triggerProps, layerProps, arrowProps } = useLayer({
    isOpen,
    overflowContainer: true,
    ResizeObserver,
    auto: true,
    triggerOffset,
    placement,
    possiblePlacements,
    onParentClose: forceClose,
  });

  return (
    <>
      {isOpen &&
        renderLayer(
          <TooltipLayer
            text={text}
            error={error}
            warning={warning}
            layerProps={layerProps}
            arrowProps={arrowProps}
          />,
        )}
      <span
        {...triggerProps}
        {...hoverProps} 
        style={{ flex }}
      >
        {children}
      </span>
    </>
  );
};

Tooltip.defaultProps = {
  text: '',
  enabled: true,
  error: false,
  warning: false,
  placement: 'top-center',
  maxWidth: 'none',
  triggerOffset: 12,
  possiblePlacements: [
    'top-center',
    'left-center',
    'bottom-center',
    'right-center',
  ],
  fontSize: 'inherit',
  flex: 'none',
  forceOpen: false,
};

Tooltip.propTypes = {
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node,
  ]),
  error: PropTypes.bool,
  warning: PropTypes.bool,
  placement: PropTypes.string,
  enabled: PropTypes.bool,
  triggerOffset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  possiblePlacements: PropTypes.array,
  flex: PropTypes.string,
  forceOpen: PropTypes.bool,
};

export default Tooltip;