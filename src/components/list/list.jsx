import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Card } from '../../index';
import { ListRow } from './list-row.jsx';
import styles from './list.module.css';

const List = ({
  list,
  bordered,
  scrollable
}) => {

  return (
    <Card bordered={bordered} padding={false}>
      <div
        className={cx(styles.list, bordered ? styles.bordered : '', scrollable? styles.scrollable : '')}
          >
            <ListRow
              items={list.items}
            />
        </div>
    </Card>
  );
};

List.defaultProps = {
  bordered: false,
  expanding: false,
  list: [],
};

List.propTypes = {
  list: PropTypes.shape({
    name: PropTypes.string,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
          .isRequired,
        name: PropTypes.string.isRequired,
        title: PropTypes.string,
        active: PropTypes.bool,
        invalid: PropTypes.bool,
        content: PropTypes.element,
      }),
    ).isRequired,
  }).isRequired,
  bordered: PropTypes.bool,
};

export default List;