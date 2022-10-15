import React from 'react';
import cx from 'classnames';
import { Label } from '../../index';
import styles from './list.module.css';

export const ListRow = ({ items }) => {
  console.log(items);
    const listElement = (index, item,  hasOnClick) => {
      const onClick = (evt) => {
        evt.preventDefault();
        evt.stopPropagation();
      };
  
      return (
        <a
          href={item.url}
          style={{ cursor: item.cursor ? item.cursor : '',}}
          className={cx(
            styles.item,
            item.active ? styles.active : '',
            hasOnClick ? styles.action : '',
          )}
          onClick={(evt) => {
            if (item.onClick) {
              return item.onClick(evt);
            }
          }}
          key={index}
          data-id={index}
          title={item.title}
        >
            <div className={styles.name} onClick={onClick}>
              {item.name}
            </div>
        </a>
      );
    };

    return (
      <>
        {items.map((item, index) => {
          const hasOnClick = item.onClick;
          return listElement(index, item, hasOnClick)
        })}
      </>
    );
}
