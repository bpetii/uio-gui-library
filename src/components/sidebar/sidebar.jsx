import React, { useState } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { Sections } from './sections.jsx';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import styles from './sidebar.module.css';
import { Button, Drawer } from '../../index';

 const SideBar = ({ options, startOpen, top, bottom }) => {
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
        closedWidth={70}
        enableButton={visible}
        buttonPosition="bottom"
        background={'#111315'}
        bottom={bottom}
        isStandardButton={false}
        button={
          visible && (
            <Button
              onClick={() => setIsOpen(prev => !prev)}
              round
              label={ <FaChevronLeft />}
            />
          )
        }
      >
        <div className={cx(styles.sidebar, !isOpen && styles.collapsed)}>
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
  }


SideBar.defaultProps = {
  startOpen: false,
  top: undefined,
  options: [],
  bottom: undefined
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
