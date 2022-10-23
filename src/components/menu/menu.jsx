import React, { useState } from "react";
import {Button} from '../../index';
import cx from 'classnames';
import styles from './menu.module.css'

const Menu = ({menu}) => {
    const [open, setOpen] = useState(false);
    const {compontent, sections} = menu || {};

    return(
        <div className={styles.dropdown}>
            {compontent || <Button label="Select" onClick={() => setOpen(prev => !prev)}/>}
            <div className={cx(styles.menu, (open && styles.open))}>
              <div className={styles.menuContent}>
              {sections.map(section => {
                  switch(section.type) {
                    case "Option":  return(
                      <option className={cx(styles.item, section.selected && styles.selected)} onClick={(e) => {section.onClick(e); setOpen(false)}}>{section.label}</option>
                      )
                    default: return(
                      <option className={cx(styles.item, section.selected && styles.selected)} onClick={(e) => {section.onClick(e); setOpen(false)}}>{section.label}</option>
                      )
                  }
                })}    
              </div>  
            </div>  
        </div>
    )
}

export default Menu;