import React from 'react';
import PropTypes from 'prop-types';
import { Cell, cellShape } from '../cell/cell.jsx';
import { isArray } from 'lodash';

const getHeaderAlignment = (alignments, isHeader, rowIndex) => {
    if (!alignments) {
      return [];
    }
  
    const isArrays = alignments.every((alignment) => isArray(alignment));
    const isStrings = alignments.every(
      (alignment) => typeof alignment === 'string',
    );
  
    if (isArrays) {
      return isHeader ? alignments[rowIndex] || [] : [];
    } else if (isStrings) {
      return alignments;
    } else {
      return [];
    }
  };

export const Row = (props) => {
  const {
    row,
    rowIndex,
    isHeader,
    columnAlignment,
    columnHeaderAlignments,
    columnWidths,
  } = props;
  const columnHeaderAlignment = getHeaderAlignment(
    columnHeaderAlignments,
    isHeader,
    rowIndex,
  );


  const {
    onRowClick,
    onRowFocus,
    onRowMouseEnter,
    onRowMouseLeave,
  } = row;

  const cells = row.cells.map((c, i) => {
    const key = `${isHeader ? 0 : 1}_${rowIndex}_${i}`;

    return (
      <Cell
        cell={c}
        key={key}
        isHeader={isHeader}
        columnAlignment={columnAlignment[i]}
        columnHeaderAlignment={columnHeaderAlignment[i]}
        width={columnWidths ? columnWidths[i] : undefined}
      />
    );
  });


  return isHeader ? (
    <>
      <tr
        key={rowIndex}
        onClick={onRowClick}
        onMouseEnter={onRowMouseEnter}
        onMouseLeave={onRowMouseLeave}
        onFocus={onRowFocus}
      >
        {cells}
      </tr>
    </>
  ) : (
    <>
      <tr
        key={rowIndex}
        onClick={onRowClick}
        onMouseEnter={onRowMouseEnter}
        onMouseLeave={onRowMouseLeave}
        onFocus={onRowFocus}
      >
        {cells}
      </tr>
    </>
  );
};

export const rowShape = PropTypes.shape({
  active: PropTypes.bool,
  cells: PropTypes.arrayOf(cellShape),
  onRowClick: PropTypes.func,
  onRowFocus: PropTypes.func,
  onRowHover: PropTypes.func,
});

Row.defaultProps = {
  isHeader: false,
  columnAlignment: [],
  columnHeaderAlignments: [],
};

Row.propTypes = {
  row: rowShape.isRequired,
  rowIndex: PropTypes.number.isRequired,
  isHeader: PropTypes.bool,
  columnCount: PropTypes.number.isRequired,
  colSpan: PropTypes.number.isRequired,
  columnHeaderAlignments: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.oneOf(['left', 'right', 'center', '']),
      PropTypes.arrayOf(PropTypes.oneOf(['left', 'right', 'center', ''])),
    ]),
  ),
  columnAlignment: PropTypes.arrayOf(
    PropTypes.oneOf(['left', 'right', 'center', '']),
  ),
};
