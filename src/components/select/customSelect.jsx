import React, {useEffect} from 'react'
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './select.module.css';
import { useState } from 'react';
import { useRef } from 'react';

export const CustomSelect = ({
    value,
    onChange,
    options,
    multiple
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [highlitedIndex, setHighlitedIndex] = useState(0);
    const containerRef = useRef(null);

    useEffect(() => {
      setHighlitedIndex(0);
    }, [isOpen])

    useEffect(()=> {
      const handler = (e) => {
        console.log(e.code);
        if (e.target !== containerRef.current) return;
        switch(e.code) {
          case 'Enter':
          case 'Space': {
            setIsOpen(true);
            if (isOpen) selectOption(options[highlitedIndex])
            break;
          }
          case 'ArrowUp':
          case 'ArrowDown': {
            if (!isOpen) {
              setIsOpen(true)
            }
            const newValueIndex = highlitedIndex + (e.code === "ArrowDown" ? 1 : -1)
            if (newValueIndex >=0 && newValueIndex < options.length) {
              setHighlitedIndex(newValueIndex);
              break;
            }
            break;
          }
          default: {}
        }
      }
        containerRef.current?.addEventListener("keydown", handler);

        return () => {
          containerRef.current?.removeEventListener("keydown", handler);
        }
    }, [isOpen, highlitedIndex, options])

    const clearOptions = () => {
      multiple? onChange([]) : onChange(null)
    }

    const selectOption = (option) => {
      if (multiple) {
        if (value.includes(option)) {
          onChange(value.filter(v => v !== option))
        } else {
          onChange([...value, option])
        }

      } else {
        if (option !== value) onChange(option);
        setIsOpen(false)
      }
    }

    const isSelectedOption = (option) => {
      return multiple ? value.includes(option) : option===value;
    }

  return (
    <div 
        ref = {containerRef}
        onBlur={() => setIsOpen(false)}
        onClick={() => setIsOpen(prev => !prev)} 
        tabIndex={0} 
        className={styles.container} 
    >
        <span data-placeholder="Select..." className={styles.value}>
          {
           multiple ? value?.map(v => (
           <button 
            key={v.value} 
            className={styles.optionBtn}
            onClick={ e => {
              e.stopPropagation();
              selectOption(v)
            }}>
              {v.label}
              <span className={styles.removeBtn}>&times;</span>
            </button>))
          : value?.label
        }</span>
        <button onClick={ e => {
          e.stopPropagation();
          clearOptions();
        }

          } className={styles.clearBtn}>&times;</button>
        <div className={styles.divider}></div>
        <div className={styles.caret}></div>
        <ul className={cx(styles.options, options.length ? '' : styles.empty, isOpen? styles.show : '')}>
            {options.length ? options.map((option, index) => (
                <li 
                onClick ={e => {
                  e.stopPropagation();
                  selectOption(option)
                }}
                onMouseEnter = {() => setHighlitedIndex(index)}
                className={cx(styles.option, isSelectedOption(option) ? styles.selected: '', highlitedIndex === index ? styles.highlighted : '')} 
                key={option.value}>{option.label}</li>
            )) : "No matches"}
        </ul>
    </div>
  );
};

CustomSelect.defaultProps = {
    options: []
};

CustomSelect.propTypes = {
    options: PropTypes.array,
};