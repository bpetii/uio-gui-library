import React from 'react';
import cx from 'classnames';
import styles from './sidebar.module.css';

export const Sections = ({ sections, onClick }) => {
  return (
    <>
      {sections.map((section, sectionIndex) => (
        <React.Fragment key={sectionIndex}>
          <h5 className={styles.subtitle}>{section.heading.toUpperCase()}</h5>
          <div className={styles.list}>
            {section.items.map((link, i) => {
              const key = `${sectionIndex}_${i}`;
              return (
                <a
                  href={link.value}
                  className={cx(
                    styles.item,
                    link.isActive ? styles.active : '',
                    link.isExperimental ? styles.experimental : '',
                  )}
                  key={key}
                  onClick={(evt) =>
                    onClick(evt, link.value, link.label, link.onClick)
                  }
                >
                  <span className={styles.label}>{link.label}</span>
                </a>
              );
            })}
          </div>
        </React.Fragment>
      ))}
    </>
  );
};
