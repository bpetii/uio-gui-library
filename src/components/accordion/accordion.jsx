import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Chevron } from './chevron/chevron.jsx';
import styles from './accordion.module.css';

const AccordionBase = ({
  heading,
  expanded,
  bordered,
  padding,
  children,
  squareBottom,
  onClick,
  testId,
}) => {
  return (
    <div
      className={cx(
        styles.accordion,
        bordered ? styles.bordered : '',
        expanded ? styles.expanded : '',
        squareBottom ? styles.squareBottom : '',
      )}
    >
      <div
        className={cx(styles.accordionHeader, onClick ? styles.clickable : '')}
        onClick={onClick}
        data-testid={testId}
      >
        <Chevron expanded={expanded} />
        <div className={styles.heading}>{heading}</div>
      </div>
      {expanded && children && (
        <div
          className={cx(
            styles.accordionContent,
            bordered && padding ? styles.padding : '',
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
};

const Accordion = ({
  heading,
  expanded,
  managed,
  bordered,
  padding,
  children,
  onClick,
  squareBottom,
}) =>
 (
    <AccordionBase
      heading={heading}
      expanded={expanded}
      bordered={bordered}
      padding={padding}
      squareBottom={squareBottom}
      onClick={onClick}
    >
      {children}
    </AccordionBase>
  );

Accordion.defaultProps = {
  bordered: false,
  padding: true,
  managed: false,
  expanded: false,
  onClick: null,
  squareBottom: false,
  testId: '',
};

Accordion.propTypes = {
  heading: PropTypes.node.isRequired,
  bordered: PropTypes.bool,
  padding: PropTypes.bool,
  managed: PropTypes.bool,
  expanded: PropTypes.bool,
  onClick: PropTypes.func,
  squareBottom: PropTypes.bool,
  testId: PropTypes.string,
};

export default Accordion;