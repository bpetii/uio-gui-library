import React, { memo, useState } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import isEqual from 'react-fast-compare';
import { FaArrowLeft } from 'react-icons/fa';
import { Sections } from './sections';
import styles from './sidebar.module.css';
import { Button, Drawer } from '../../index';

 const SideBar = memo(
  ({ options, startOpen, onShiftClickToggleOpen, top }) => {
    const [isOpen, setIsOpen] = useState(startOpen || false);

    const onClick = (evt, value, label, clickHandler) => {
      evt.preventDefault();
      if (typeof clickHandler === 'function') {
        evt.target.value = value;
        evt.target.label = label;
        clickHandler(evt);
      }
      setIsOpen(false);
    };

    const visible = options.sections.length > 0;
    return (
      <Drawer
        fixed
        open={isOpen}
        top={top}
        background="#111315"
        closedWidth={70}
        enableButton={visible}
        buttonPosition="bottom"
        button={
          visible && (
            <Button
              onClick={(evt) => {
                if (evt.shiftKey) {
                  onShiftClickToggleOpen(evt);
                }
                setIsOpen(!isOpen);
              }}
              colored
              round
              icon={<FaArrowLeft />}
            />
          )
        }
      >
        <div className={cx(styles.sidebar, !isOpen ? styles.collapsed : '')}>
          {visible && (
            <div className={styles.inner}>
              <h4 className={styles.title}>{options.title}</h4>
              <Sections
                isOpen={isOpen}
                sections={options.sections}
                onClick={onClick}
              />
            </div>
          )}
        </div>
      </Drawer>
    );
  },
  (prevProps, nextProps) => isEqual(prevProps, nextProps),
);

SideBar.defaultProps = {
  startOpen: false,
  onShiftClickToggleOpen: () => {},
  top: undefined,
};

SideBar.propTypes = {
  options: PropTypes.shape({
    title: PropTypes.string.isRequired,
    sections: PropTypes.arrayOf(
      PropTypes.shape({
        heading: PropTypes.string.isRequired,
        items: PropTypes.arrayOf(
          PropTypes.shape({
            label: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
              .isRequired,
            value: PropTypes.string.isRequired,
            icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
              .isRequired,
            onClick: PropTypes.func.isRequired,
            isActive: PropTypes.bool,
            isExperimental: PropTypes.bool,
            invalid: PropTypes.bool,
            testId: PropTypes.string,
          }),
        ).isRequired,
      }),
    ).isRequired,
  }).isRequired,
  startOpen: PropTypes.bool,
  onShiftClickToggleOpen: PropTypes.func,
  top: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default SideBar;
