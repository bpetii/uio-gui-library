import React, { useState } from "react";
import {Button} from '../../index';
import cx from 'classnames';
import PropTypes from 'prop-types';
import styles from './menu.module.css'

const Menu = ({menu}) => {
    const [open, setOpen] = useState(false);
    let customuedTrigger = null;
    if (menu.component) {
      customuedTrigger =  React.cloneElement(
        menu.component,
        {onClick: () => setOpen(prev => !prev)}
      )
    }
  
    return(
        <div className={styles.dropdown}>
            {customuedTrigger || <Button label="Select" onClick={() => setOpen(prev => !prev)}/>}
            <div className={cx(styles.menu, (open && styles.open), (menu.left && styles.left))}>
              <div className={styles.menuContent}>
              {menu.sections.map((section,ix) => {
                console.log(ix);
                  switch(section.type) {
                    case "Option":  return(
                      <div
                        key={ix}
                        className={cx(styles.item, section.selected && styles.selected)} 
                        onClick={(e) => {
                        if (typeof section.onClick !== 'function') return;
                        e.stopPropagation()
                        section?.onClick(e); 
                        setOpen(false);
                      }}
                      >
                        {section.label}
                      </div>
                      )
                    default: return(
                      <div
                        key={ix}
                        className={cx(styles.item, section.selected && styles.selected)} 
                        onClick={(e) => {
                          if (!typeof  section?.onClick !== 'function') return;
                          e.stopPropagation()
                          section?.onClick(e); 
                          setOpen(false);
                        }}
                        >
                          {section.label}
                        </div>
                      )
                  }
                })}    
              </div>  
            </div>  
        </div>
    )
}


Menu.defaultProps = {
  menu: {},
  left: false
};

Menu.propTypes = {
  menu: PropTypes.shape({
    sections: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string,
      selected: PropTypes.bool,
      onClick: PropTypes.func,
      type: PropTypes.string,
    })),
    component: PropTypes.node,
    left: PropTypes.bool
  }),
};

export default Menu;