import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './cell.module.css';


const getCellAlignment = (alignment, styles, isGetText = false) => {
    if (!alignment) {
      return null;
    }
  
    const { bodyAlignment, headerAlignment, isHeader } = alignment;
    const left = 'left';
    const right = 'right';
    const center = 'center';
    const cellAlignment = isHeader ? headerAlignment : bodyAlignment;
  
    switch (cellAlignment) {
      case left: {
        return isGetText ? left : styles.leftAligned;
      }
      case right: {
        return isGetText ? right : styles.rightAligned;
      }
      case center: {
        return isGetText ? center : styles.centerAligned;
      }
      default: {
        return isGetText ? left : styles.leftAligned;
      }
    }
  };

const StaticCell = (props) => {
  const { cell } = props;
  const field = (
    <div
      className={cx(
        styles.staticCell,
      )}
    >
      {cell.value}
    </div>
  );
  console.log(cell.value);
  return (
    <div>
      {field}
    </div>

  );
};

export const Cell = (props) => {
  const {
    cell,
    isHeader,
    columnHeaderAlignment,
    columnAlignment,
    width,
  } = props;
  const { style, colSpan } = cell;
  const ref = useRef(null);
  const alignment = {
    bodyAlignment: columnAlignment,
    headerAlignment: columnHeaderAlignment,
    isHeader,
  };
  const cellAlignmentStyle = getCellAlignment(alignment, styles);

  const className = cx(
    styles.cellWrapper,
    cellAlignmentStyle,
    cell.breakWord ? styles.breakWord : '',
  );

  const isWidthCustomSelect =
    cell.type === 'Select' && cell.native !== true && cell.width !== undefined;

  return isHeader ? (
    <th
      className={className}
      style={{
        ...style,
        ...(isWidthCustomSelect ? { width: '1%' } : {}),
        ...(width && !colSpan ? { minWidth: width } : {}),
      }}
      colSpan={colSpan}
    >
      <StaticCell cell={cell} isHeader={isHeader}/>
    </th>
  ) : (
    <td
      ref={ref}
      className={className}
      style={{
        ...style,
        ...(isWidthCustomSelect ? { width: '1%' } : {}),
        ...(width && !colSpan ? { minWidth: width } : {}),
      }}
      colSpan={colSpan}
    >
    <StaticCell cell={cell} isHeader={isHeader}/>
    </td>
  );
};


export const cellShape = PropTypes.oneOfType([
  PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    colSpan: PropTypes.number,
    error: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.node,
    ]),
    warning: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.node,
    ]),
    tooltip: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.node,
    ]),
    maxTooltipWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    breakWord: PropTypes.bool,
    libraryIcon: PropTypes.shape({
      onClick: PropTypes.func,
      tooltip: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.node,
      ]),
    }),
    helpIcon: PropTypes.shape({
      onClick: PropTypes.func,
      tooltip: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.node,
      ]),
    }),
    testId: PropTypes.string,
  }),
]);

Cell.defaultProps = {
  isHeader: false,
  style: {},
  cell: {},
  testId: '',
};

Cell.propTypes = {
  isHeader: PropTypes.bool,
  style: PropTypes.object,
  cell: cellShape,
  testId: PropTypes.string,
};
