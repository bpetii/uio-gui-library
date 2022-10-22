import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Element } from './element/element.jsx';
import styles from './top-bar.module.css';

const TopBar = ({
  content,
  contentRight,
}) => {
  return (
    <div>
      <div
        className={cx(styles.topbar)}
      >
        <div className={styles.left}>
          {content.map((element, i) => {
            if (element) {
              return <Element key={i} element={element} />;
            }
            return null;
          })}
        </div>
        <div className={styles.right}>
          {contentRight.map((element, i) => {
            if (element) {
              return <Element key={i} element={element} />;
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
};

TopBar.defaultProps = {
  content: [],
  contentRight: [],
};

TopBar.propTypes = {
  content: PropTypes.array,
  contentRight: PropTypes.array,
};

export default TopBar;
