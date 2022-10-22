import React from 'react';
import cx from 'classnames';
import { Button, Label} from '../../index';
import styles from '../top-bar.module.css';

export const Element = ({ element }) => {
  return (() => {
    switch (element.type) {
      case 'Button': {
        return (
          <div className={cx(styles.item, styles.button)}>
            <Button
              label={element.label}
              colored={element.colored}
              pill
              disabled={element.disabled}
              onClick={element.onClick}
              icon={element.icon}
            />
          </div>
        );
      }
      case 'Text': {
        return (
          <div className={cx(styles.item, styles.label)}>
            <Label label={element.label}/>
          </div>
        );
      }
      case 'Component': {
        return <div className={styles.item}>{element.component}</div>;
      }
      default:
        return null;
    }
  })();
};
