import React, { useState } from "react";
import {Button} from '../../index';
import cx from 'classnames';
import PropTypes from 'prop-types';
import styles from './menu.module.css'

const Menu = ({menu}) => {
    const [open, setOpen] = useState(false);
    return(
        <div className={styles.dropdown} onClick={() => setOpen(prev => !prev)}>
            {menu.component|| <Button label="Select" />}
            <div className={cx(styles.menu, (open && styles.open))}>
              <div className={styles.menuContent}>
              {menu.sections.map(section => {
                  switch(section.type) {
                    case "Option":  return(
                      <div 
                        className={cx(styles.item, section.selected && styles.selected)} 
                        onClick={(e) => {
                        e.stopPropagation()
                        section.onClick(e); 
                        setOpen(false);
                      }}
                      >
                        {section.label}
                      </div>
                      )
                    default: return(
                      <div 
                      className={cx(styles.item, section.selected && styles.selected)} 
                      onClick={(e) => {
                        e.stopPropagation()
                        section.onClick(e); 
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
};

Menu.propTypes = {
  menu: PropTypes.shape({
    sections: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string,
      selected: PropTypes.bool,
      onClick: PropTypes.func,
      type: PropTypes.string,
    })),
    component: PropTypes.elementType,
  }),
};

export default Menu;