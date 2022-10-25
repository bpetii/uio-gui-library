import React, {useState}  from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Button } from '../../index';
import styles from './drawer.module.css';

const Drawer = ({
  children,
  fixed,
  open: openProp,
  right,
  shadow,
  top,
  width,
  closedWidth,
  button,
  background,
  buttonPosition,
  hasFooter,
  border,
}) => {
  const [open, setOpen] = useState(openProp)
  const currentWidth = open ? width : closedWidth;

  return (
    <div
      className={cx(
        styles.drawer,
        shadow ? styles.shadow : '',
        fixed ? styles.fixed : styles.inline,
        right ? styles.right : styles.left,
      )}
      style={{
        top,
      }}
    >
      <div
        className={cx(styles.drawerContent, border && styles.border)}
        style={{background, width: currentWidth }}
      >
        <div style={{ width: width }}>{children}</div>
      </div>

      {button && (
        <span
          className={cx(
            styles.toggleButton,
            open ? styles.toggleButtonOpen : '',
            buttonPosition === 'top' ? styles.top : styles.bottom,
          )}
        >
            <Button
              onClick={setOpen ? () => setOpen(!open) : null}
              round
              label={right ? <FaChevronRight /> : <FaChevronLeft />}
            />
        </span>
      )}
    </div>
  );
};

Drawer.defaultProps = {
  background: 'transparent',
  fixed: false,
  open: false,
  right: false,
  width: 400,
  closedWidth: 0,
  shadow: false,
  top: 0,
  button: null,
  buttonAnimate: true,
  buttonPosition: 'bottom',
  border: false,
  children: null,
  tabs: null,
  defaultTabIndex: 0,
  testId: undefined,
};

Drawer.propTypes = {
  background: PropTypes.string,
  fixed: PropTypes.bool,
  open: PropTypes.bool,
  right: PropTypes.bool,
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    ),
  ]),
  closedWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.node,
  shadow: PropTypes.bool,
  top: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  //button
  button: PropTypes.oneOfType([PropTypes.bool, PropTypes.node]),
  buttonAnimate: PropTypes.bool,
  buttonPosition: PropTypes.oneOf(['top', 'bottom']),
  border: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  // tabs
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.node,
      content: PropTypes.node,
    }),
  ),
  testId: PropTypes.string,
  defaultTabIndex: PropTypes.number,
};

export default Drawer;