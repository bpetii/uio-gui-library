import { get } from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './table.module.css';
import { Title } from './title/title';
import { Row, rowShape } from './row/row';

const getMaxCellCount = (rows) => {
  const count = Math.max(
    ...rows.reduce((acc, row) => {
      const count = row.cells
        .map((c) => (c.colSpan ? c.colSpan : 1))
        .reduce((a, b) => a + b, 0);
      return acc.concat(count);
    }, []),
  );
  return !isNaN(count) ? count : 0;
};

const getColumnCount = (rows, headers) => {
  const cellCount = [getMaxCellCount(headers), getMaxCellCount(rows)];
  return Math.max(...cellCount);
};

export const Table = (props) => {
  const {
      name,
      rows,
    fixedWidth,
    columnHeaderAlignments,
    maxHeight,
    columnWidths,
    columnAlignment,
    bordered = true,
    striped = true,
  } = props.table;

  const headers = get(props, 'table.headers', []);
  const columnCount = getColumnCount(rows, headers);
  const colSpan = columnCount;

  return (
    <div
      className={maxHeight ? styles.maxHeight : ''}
      style={{ maxHeight: maxHeight || 'none' }}
    >
      <table
        className={cx(
          styles.table,
          bordered ? styles.bordered : '',
          striped ? styles.striped : '',
        )}
        style={{
          minWidth: fixedWidth || '',
        }}
      >
        <thead>
          <Title name={name} colSpan={colSpan} />
          {headers.map((row, rowIndex) =>(
              <Row
                rowIndex={rowIndex}
                isHeader
                row={row}
                columnCount={columnCount}
                columnWidths={columnWidths}
                colSpan={colSpan}
                key={`0_${rowIndex}`}
                columnAlignment={columnAlignment}
                columnHeaderAlignments={columnHeaderAlignments}
              />
            ))}
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <Row
              rowIndex={rowIndex}
              row={row}
              columnCount={columnCount}
              colSpan={colSpan}
              key={`1_${rowIndex}`}
              columnAlignment={columnAlignment}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  table: PropTypes.shape({
    name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    fixedWidth: PropTypes.string,
    maxHeight: PropTypes.string,
    columnWidths: PropTypes.arrayOf(PropTypes.string),
    className: PropTypes.string,
    columnHeaderAlignments: PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.oneOf(['left', 'right', 'center']),
        PropTypes.arrayOf(PropTypes.oneOf(['left', 'right', 'center', ''])),
      ]),
    ),
    columnAlignment: PropTypes.arrayOf(
      PropTypes.oneOf(['left', 'right', 'center', '']),
    ),
    headers: PropTypes.arrayOf(rowShape),
    rows: PropTypes.arrayOf(rowShape),
    bordered: PropTypes.bool,
    striped: PropTypes.bool,
  }).isRequired,
};
