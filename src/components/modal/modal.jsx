import React, { useLayoutEffect, useState }  from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './modal.module.css';

const Portal = ({ id, children }) => {
  const parent = document.querySelector(`#${id}`);
  const [mounted, setMounted] = useState(false);
  useLayoutEffect(() => {
    if (!mounted) setMounted(true);
  }, [id]);
  return parent ? createPortal(children, parent) : null;
};

const Wrapper = ({ children }) => (
  <div className={cx(styles.wrapper)}>{children}</div>
);

const Content = ({ children, centered }) => {
  return (
    <div
      className={cx(styles.contentContainer, centered ? styles.centered : '')}
    >
      {children}
    </div>
  );
};

const Modal = ({ children, visible, centered }) => {
  return (
    <>
      <Portal id="modalContainer">
        {visible ? (
          <Wrapper>
            <Content centered={centered}>
              {children}
            </Content>
          </Wrapper>
        ) : null}
      </Portal>
      <div id="modalContainer" />
    </>
  );
};

Modal.defaultProps = {
  visible: false,
  centered: false,
  width: '100%',
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  visible: PropTypes.bool,
  centered: PropTypes.bool,
  width: PropTypes.string,
};

export default Modal;